// QuillEditor.js
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './IrsMailer.css'

const QuillEditor = ({ value, onChange }) => {
  return (
    <div className="irs-mailer__quill-editor">
      <ReactQuill value={value} onChange={onChange}  ></ReactQuill>
    </div>
  );
};

export default QuillEditor;