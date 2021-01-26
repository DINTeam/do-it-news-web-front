/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'quill/dist/quill.snow.css';

import { putImage } from '../../api/news';

const TOOLBAR_OPTIONS = [
  [{ font: [] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ direction: 'rtl' }],
  [{ align: [] }],
  ['link', 'image', 'formula'],
];

const WysiwygEditor = props => {
  const Quill = typeof window === 'object' ? require('quill') : () => false;

  const quillElement = useRef();
  const quillInstance = useRef();

  const { value, onChange, placeholder } = props;

  const OPTIONS = {
    placeholder,
    theme: 'snow',
    modules: {
      toolbar: TOOLBAR_OPTIONS,
    },
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, OPTIONS);
    const quill = quillInstance.current;
    const toolbar = quill.getModule('toolbar');

    quill.root.innerHTML = value;
    quill.on('text-change', () => onChange(quill.root.innerHTML));

    const onChangeImage = () => {
      const input = document.createElement('input');

      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click();

      input.onchange = async () => {
        const formData = new FormData();
        const file = input.files[0];
        const range = quill.getSelection(true);
        const imageUploadLoadingMsg = '(Loading...)';

        formData.append('image', file);

        const moveSelectionFromCurrentPosition = val =>
          quill.setSelection(range.index + val);

        const removeImageUploadLoadingMsg = () =>
          quill.deleteText(range.index, imageUploadLoadingMsg.length);

        quill.insertText(range.index, imageUploadLoadingMsg);
        moveSelectionFromCurrentPosition(imageUploadLoadingMsg.length);

        putImage(formData)
          .then(res => {
            const { imageUrl } = res;
            removeImageUploadLoadingMsg();
            quill.insertEmbed(range.index, 'image', imageUrl);
            moveSelectionFromCurrentPosition(1);
          })
          .catch(() => {
            const errorMsg = '(Image upload fail)';
            removeImageUploadLoadingMsg();
            quill.insertText(range.index, errorMsg);
            moveSelectionFromCurrentPosition(errorMsg.length);
          });
      };
    };

    toolbar.addHandler('image', onChangeImage);
  }, []);

  return (
    <div className="wrapper">
      <div ref={quillElement} />
    </div>
  );
};

WysiwygEditor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

WysiwygEditor.defaultProps = {
  value: '',
  onChange: () => {},
  placeholder: '',
};

export default WysiwygEditor;
