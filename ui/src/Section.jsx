
import { useEffect, useState } from "react";
import './style.css'

export const Bttn = ({ }) => {

    const [images, setImages] = useState([]);
    const [imagesToCompare, setImagesToCompare] = useState([]);

    const handleChange = (e) => {
        setImages((images) => [...images, URL.createObjectURL(e.files[0])]);
        return URL.revokeObjectURL(e.files[0])
    }

    const handleChangeToCompare = (e) => {
        setImagesToCompare((imagesToCompare) => [...imagesToCompare, URL.createObjectURL(e.files[0])]);
        return URL.revokeObjectURL(e.files[0])
    }

    const deleteImage = (blob) => {
        setImages(images.filter(x => x !== blob));
    };

    useEffect(() => {
        console.log(images);
    }, [images]);


    return (

        <div className="center">
            <div className="left-sidebar">
                <input type="file" onChange={(e) => handleChange(e.target)} />

                {images.map((row, index) =>
                    <div key={index}>
                        <img src={row} alt={row} />
                        <button onClick={() => deleteImage(row)}>borrar</button>
                    </div>
                )}
            </div>
            <div className="right-sidebar">
                <input type="file" onChange={(e) => handleChangeToCompare(e.target)} />

                {imagesToCompare.map((row, index) =>
                    <div key={index}>
                        <img src={row} alt={row} />
                        <button onClick={() => deleteImage(row)}>borrar</button>
                    </div>
                )}
            </div>
        </div>

    );

};
