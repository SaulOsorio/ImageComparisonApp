import React, { useState, useEffect } from 'react';

import './style.css'

export const CompareBttn = () =>{
    const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('http://localhost:8080/compare', {
    //         mode: 'no-cors'
    //     })
    //       .then(response => response.json())
    //       .then(data => setData(response.json()))
    //       .catch(error => console.error(error));
    //   }, []);

    const handleCompare = () => {
        fetch('http://localhost:8080/compare')
          .then(response => response.json())
          .then(data => setData(response.json()))
          .catch(error => console.error(error));
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