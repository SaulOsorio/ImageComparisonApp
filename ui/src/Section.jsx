import { useEffect, useState } from "react";
import "./style.css";

export const Bttn = ({}) => {
  const [images, setImages] = useState([]);
  const [imagesToCompare, setImagesToCompare] = useState([]);

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file1", file1);
    formData.append("file2", file2);

    fetch("http://localhost:8080/upload", {
      mode: 'no-cors',
      method: "POST",
      body: formData,
    })
      
  };

  const handleImage1Change = (event) => {
    setFile1(event.target.files[0]);
  };

  const handleImage2Change = (event) => {
    setFile2(event.target.files[0]);
  };

//   const handleChange = (e) => {
//     setImages((images) => [
//         ...images,
//          URL.createObjectURL(e.files[0])]);
//     return URL.revokeObjectURL(e.files[0]);
//   };

//   const handleChangeToCompare = (e) => {
//     setImagesToCompare((imagesToCompare) => [
//       ...imagesToCompare,
//       URL.createObjectURL(e.files[0]),
//     ]);
//     return URL.revokeObjectURL(e.files[0]);
//   };

  const deleteImage = (blob) => {
    setImages(images.filter((x) => x !== blob));
  };

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <form onSubmit={handleSubmit} >
      <div className="center">
        <div className="left-sidebar">
          <input
            type="file"
            id="image1"
            name="image1"
            accept="image/*"
            onChange={handleImage1Change}
          />

          {images.map((row, index) => (
            <div key={index}>
              <img src={row} alt={row} />
              <button onClick={() => deleteImage(row)}>borrar</button>
            </div>
          ))}
        </div>
        <div className="right-sidebar">
          <input
            type="file"
            id="image2"
            name="image2"
            accept="image/*"
            onChange={handleImage2Change}
          />

          {imagesToCompare.map((row, index) => (
            <div key={index}>
              <img src={row} alt={row} />
              <button onClick={() => deleteImage(row)}>borrar</button>
            </div>
          ))}
        </div>
      </div>
      <div className="center">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
