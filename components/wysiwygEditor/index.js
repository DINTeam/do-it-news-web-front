/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css';

const WysiwygEditor = () => {
  const Quill = typeof window === 'object' ? require('quill') : () => false;

  const quillElement = useRef();
  const quillInstance = useRef();

  const options = {
    placeholder: '내용을 입력해 주세요.',
    theme: 'snow',
  };

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, options);
  }, []);

  return (
    <div className="wrapper">
      <div ref={quillElement} />
    </div>
  );
};

export default WysiwygEditor;
