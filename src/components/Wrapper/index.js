import React from "react";
import "./style.css";

function Wrapper(props) {
  
  return (
    <div className="container-fluid text-center">
      <main className="wrapper" {...props} />; 
    </div>
  );
};

export default Wrapper;
