import React, { useState } from "react";
import { FileInput } from "./FileInput";
import { ImagePreview } from "./ImagePreview";

export const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [imagesToCompare, setImagesToCompare] = useState([]);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleImage1Change = (event) => {
    const maxAllowedSize = 10 * 1024 * 1024;
    if (event.target.files[0].size < maxAllowedSize){
        setFile1(event.target.files[0]);
        setImages((images) => [
          ...images,
          URL.createObjectURL(event.target.files[0]),
        ]);
    }
    else{
        alert("the size is bigger than 10 Mb");
    }
    
  };

  const handleImage2Change = (event) => {
    const maxAllowedSize = 10 * 1024 * 1024;

    if (event.target.files[0].size < maxAllowedSize){
        
        setFile2(event.target.files[0]);
        setImagesToCompare((imagesToCompare) => [
          ...imagesToCompare,
          URL.createObjectURL(event.target.files[0]),
        ]);
    }
    else{
        alert("the size is bigger than 10 Mb");
    }
  };

  const deleteImage = (blob) => {
    setImages(images.filter((x) => x !== blob));
    setImagesToCompare(imagesToCompare.filter((x) => x !== blob));
  };

  const handleSubmit = (event) => {
    console.log("Simon!!")
    event.preventDefault();

    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    fetch("http://localhost:8080/upload", {
      mode: "no-cors",
      method: "POST",
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="center">
        <div className="left-sidebar">
          <FileInput
            id="image1"
            name="image1"
            accept="image/*"
            onChange={handleImage1Change}
          />
          {images.map((row, index) => (
            <ImagePreview
              key={index}
              image={row}
              onDelete={() => deleteImage(row)}
            />
          ))}
        </div>
        <div className="right-sidebar">
          <FileInput
            id="image2"
            name="image2"
            accept="image/*"
            onChange={handleImage2Change}
          />
          {imagesToCompare.map((row, index) => (
            <ImagePreview
              key={index}
              image={row}
              onDelete={() => deleteImage(row)}
            />
          ))}
        </div>
      </div>
      <div className="center">
        <button type="submit">Upload Images</button>
      </div>
    </form>
  );
};