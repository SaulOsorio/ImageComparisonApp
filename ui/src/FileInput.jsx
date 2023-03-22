import React from "react";

export const FileInput = ({ id, name, accept, onChange }) => {
  return (
    <input type="file" id={id} name={name} accept={accept} onChange={onChange} />
  );
};

export default FileInput;