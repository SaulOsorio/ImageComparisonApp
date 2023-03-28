import React from "react";
import './style.css';

export const FileInput = ({ id, name, accept, onChange }) => {
  return (
    
    <input type="file" className="custom-file-input" id={id} name={name} accept={accept} onChange={onChange} />
    
  );
};

export default FileInput;