/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
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

const OPTIONS = {
  placeholder: '내용을 입력해 주세요.',
  theme: 'snow',
  modules: {
    toolbar: TOOLBAR_OPTIONS,
  },
};

const WysiwygEditor = () => {
  const Quill = typeof window === 'object' ? require('quill') : () => false;

  const quillElement = useRef();
  const quillInstance = useRef();

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, OPTIONS);
  }, []);

  return (
    <div className="wrapper">
      <div ref={quillElement} />
    </div>
  );
};

export default WysiwygEditor;
