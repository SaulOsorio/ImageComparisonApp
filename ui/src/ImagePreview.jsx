import React from "react";

export const ImagePreview = ({ image }) => {
  return (
    <div>
      <img src={image} alt={image} />
      
    </div>
  );
};