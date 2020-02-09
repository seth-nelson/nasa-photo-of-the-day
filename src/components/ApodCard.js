import React, { useState, useEffect } from "react";
import ImageInfo from "./ImageInfo";
import axios from "axios";
import "./ApodCard.css";
import styled from "styled-components";

const PostContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
`;


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
        <PostContainer className="photo-post-container">
        <ImageInfo nasaImg={nasaImg} /> 
        </PostContainer>
    )};

    export default ApodCard;