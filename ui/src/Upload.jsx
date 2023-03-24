import React, { useState } from "react";
import { FileInput } from "./FileInput";
import { ImagePreview } from "./ImagePreview";

export const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [imagesToCompare, setImagesToCompare] = useState([]);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [data, setData] = useState(null);

  const handleImage1Change = (event) => {
    const maxAllowedSize = 10 * 1024 * 1024;
    if (event.target.files[0].size < maxAllowedSize) {
      setFile1(event.target.files[0]);
      setImages((images) => [
        images[0], //...images,
        URL.createObjectURL(event.target.files[0]),
      ]);
    } else {
      alert("the size is bigger than 10 Mb");
    }
  };

  const handleImage2Change = (event) => {
    const maxAllowedSize = 10 * 1024 * 1024;

    if (event.target.files[0].size < maxAllowedSize) {
      setFile2(event.target.files[0]);
      setImagesToCompare((imagesToCompare) => [
        imagesToCompare[0], //...imagesToCompare,
        URL.createObjectURL(event.target.files[0]),
      ]);
    } else {
      alert("The file size can not be bigger than 10MB");
    }
  };

  const deleteImage = (blob) => {
    setImages(images.filter((x) => x !== blob));
    setImagesToCompare(imagesToCompare.filter((x) => x !== blob));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    try {
      const response = await fetch("http://localhost:8080/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setData(data.status);
    } catch (error) {
      //console.error(error); // handle errors
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            {
              <ImagePreview image={images[1]} />
            }
          </div>

          <div className="col">
            { 
              <ImagePreview image={imagesToCompare[1]} />
            }
          </div>
        </div>
        <div className="row">
          <div className="col">
            
            <FileInput
              id="image1"
              name="image1"
              accept="image/*"
              onChange={handleImage1Change}
            />
          </div>

          <div className="col">
            <FileInput
              id="image2"
              name="image2"
              accept="image/*"
              onChange={handleImage2Change}
            />
          </div>
        </div>

        <div className="row">
          <div className="center">
            
            <button type="submit" className="btn btn-secondary">
              Upload Images
            </button>
          
          </div>
        </div>
        <div className="row">
            <div className="center">
              <h1>{data}</h1>
            </div>
        </div>


        
      </div>
    </form>
  );
};
