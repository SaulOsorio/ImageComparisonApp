import React, { useState, useEffect } from 'react';

import './style.css'

export const CompareBttn = (files) =>{
    const [data, setData] = useState(null);

    const handleCompare = () => {
        console.log("baseImage." + files.baseImageName.split('.')[1]);
        console.log("compareImage."+ files.imageCompareName.split('.')[1]);
        fetch('http://localhost:8080/compare',{ 
        method: 'POST',
        body: {baseImageName: "baseImage." + files.baseImageName.split('.')[1],
                compareImageName: "compareImage."+ files.imageCompareName.split('.')[1]},
        })
        //   .then(response => response.json())
        //   .then(data => setData(response.json()))
        //   .catch(error => console.error(error));
    }
    
    return(
        <>
        <div className='center'>
            <button onClick={handleCompare}>Compare</button>
        </div>   
        <div className='center'>
            <h1>{data}</h1>
        </div>    
        </>
    );
};