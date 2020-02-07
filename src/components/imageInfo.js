import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodCard from "../"


const ImageInfo = props => {
    console.log();

    return (
        <div className="img-container">
            <h1>{props.nasaImg.title}</h1>
            <h3>Photo by: {props.nasaImg.copyright}</h3>
            <img src={props.nasaImg.url} alt={props.nasaImg.title} />
            <a href={props.nasaImg.hdurl}>View photo in HD</a>
            <p>{props.nasaImg.explanation}</p>
        </div>
    )
};

export default ImageInfo;