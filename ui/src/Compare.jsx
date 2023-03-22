import React, { useState, useEffect } from 'react';

import './style.css'

export const CompareBttn = () =>{
    const [data, setData] = useState(null);

    
    async function handleCompare() {
        try {
          const response = await fetch('http://localhost:8080/compare');
          const data = await response.json();
          setData(data.result)
          console.log(data); // the response data
        } catch (error) {
          console.error(error); // handle errors
        }
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