/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import 'quill/dist/quill.snow.css';

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

    quill.root.innerHTML = value;
    quill.on('text-change', () => onChange(quill.root.innerHTML));
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
