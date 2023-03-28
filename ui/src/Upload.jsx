import React, { useState } from "react";
import { CompareBttn } from "./Compare";
import { FileInput } from "./FileInput";
import { ImagePreview } from "./ImagePreview";

export const DataContext = React.createContext();

export const UploadImages = () => {
  const [images, setImages] = useState([]);
  const [imagesToCompare, setImagesToCompare] = useState([]);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [data, setData] = useState(null);

  const handleImage1Change = (event) => {
    if (event.target.files[0] !== undefined){
      setFile1(event.target.files[0]);
      setImages((images) => [
      images[0], //...images,
      URL.createObjectURL(event.target.files[0]),
      ])
    };
  };

  const handleImage2Change = (event) => {
    if (event.target.files[0] !== undefined){
      setFile2(event.target.files[0]);
      setImagesToCompare((imagesToCompare) => [
      imagesToCompare[0], //...imagesToCompare,
      URL.createObjectURL(event.target.files[0]),
      ])
    };
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
        setTimeout(() => {
        setData(data.status);
      }, 500);
      setData("Uploading...");
    } catch (error) {
      //console.error(error); // handle errors
    }
  }

  return (
    <>
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
          <br/>
            <FileInput
              id="image1"
              name="image1"
              accept="image/*"
              onChange={handleImage1Change}
            />
          </div>

          <div className="col">
          <br/>
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
    <DataContext.Provider value={data}>
      <CompareBttn />
    </DataContext.Provider>
    </>
  );
};
