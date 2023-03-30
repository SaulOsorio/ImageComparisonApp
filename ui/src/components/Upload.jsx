import React, { useEffect, useState } from "react";
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
  const isUploadable = file1 !== null && file2 !== null;

  const handleImageChange = (event, setFile, setImagesArr) => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
      setImagesArr((images) => [
        images[0],
        URL.createObjectURL(event.target.files[0]),
      ]);
    }
  };

  const handleSubmit = async (event) => {
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
      setData("Uploading");
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    setData("");
  }, [images, imagesToCompare]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container text-center">
          <div className="row">
            <div className="col">BASE IMAGE</div>
            <div className="col">IMAGE TO COMPARE</div>
          </div>
          <div className="row">
            <div className="col">{<ImagePreview image={images[1]} />}</div>

            <div className="col">
              {<ImagePreview image={imagesToCompare[1]} />}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <br />
              <FileInput
                id="image1"
                name="image1"
                accept="image/*"
                onChange={(event) =>
                  handleImageChange(event, setFile1, setImages)
                }
              />
            </div>

            <div className="col">
              <br />
              <FileInput
                id="image2"
                name="image2"
                accept="image/*"
                onChange={(event) =>
                  handleImageChange(event, setFile2, setImagesToCompare)
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="center">
              <button
                type="submit"
                className="btn btn-secondary"
                disabled={!isUploadable}
              >
                Upload Images
              </button>
            </div>
          </div>

          <div className="row">
            <div className="center">
              {data !== "" ? (
                <div className="alert alert-secondary" role="alert">
                  <h4>{data}</h4>
                </div>
              ) : (
                <div>
                  <br />
                </div>
              )}
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
