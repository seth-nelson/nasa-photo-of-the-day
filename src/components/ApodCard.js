import React, { useState, useEffect } from "react";
import LikeButton from "./LikeButton";
import ImageInfo from "./ImageInfo";
import Title from "./Title";
import axios from "axios";
import "./ApodCard.css";

const ApodCard = props => {
    const [nasaImg, setNasaImg] = useState('');
    // console.log();

    useEffect(() => {
        // console.log(nasaImg);

        axios.get(`https://api.nasa.gov/planetary/apod?api_key=inPjaaJyTMnb0cJsR1l50D3EJ8sNVlM6wD7sADgx
        `)
            .then(response => {
                setNasaImg(response.data)
                console.log(response.data);

            })
            .catch(error => console.log("oops", error));
        }, [])

    return (
        <div className="photo-post-container">
        <ImageInfo nasaImg={nasaImg} /> 
        </div>
    )};

    export default ApodCard;