import React, { useState } from "react";
import { loader } from "../../../utils/const";
import "./PreLoader3.css";

function PreLoader3(props) {
  const [loading, setloading] = useState(props.loading === loader.LOADING);

  return (
    <>
        {loading ? (
            <div className="spinner">
                <span>Loading...</span>
                <div className="half-spinner"></div>
            </div>
            ) : (
            <div className="completed">&#x2713;</div>
        )}
    </>
  );
}

export default PreLoader3;