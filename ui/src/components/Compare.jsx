import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "./Upload";
import "../css/style.css";

export const CompareBttn = () => {
  const [data, setData] = useState(null);
  const status = useContext(DataContext);

  async function handleCompare() {
    try {
      const response = await fetch("http://localhost:8080/compare");
      const data = await response.json();

      setTimeout(() => {
        if (data.hasOwnProperty("result")){
          setData(data.result);
        } else {
          setData(data.status)
        }
      }, 500);
      setData("Comparing");
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    if (status !== "Files uploaded successfully") {
      setData("");
    }
  });

  return (
    <>
      <div className="center">
        <button
          className="btn btn-secondary"
          onClick={handleCompare}
          disabled={status !== "Files uploaded successfully" ? true : false}
        >
          Compare
        </button>
      </div>

      <div className="center">

        {data !== ""? (<div className="alert alert-secondary" role="alert">
          <h2>{data}</h2>
        </div>):(
          <div>
                  <br />
                </div>
        )}
      </div>
    </>
  );
};
