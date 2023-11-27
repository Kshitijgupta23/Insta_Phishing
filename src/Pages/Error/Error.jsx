import React from 'react';
import {Link} from "react-router-dom";
import pic from "./pic.jpg";
import "./Error.css";

const Error = () => {
  return (
    <div className="parent">
        <div><h1>We are really sorry, Server under Maintenance!</h1></div>
        <div><img className="image" src={pic} alt="IMG UNAVAILABLE" /></div>
        <div><Link to="/"><button className="btn_error">BACK TO HOMEPAGE</button></Link></div>
    </div>
  )
}

export default Error;
