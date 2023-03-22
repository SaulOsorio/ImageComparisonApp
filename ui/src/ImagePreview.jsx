import React from "react";

export const ImagePreview = ({ image, onDelete }) => {
  return (
    <div>
      <img src={image} alt={image} />
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};