import React, { useEffect, useState } from "react";
import axios from "axios";
import ApodCard from "../"
import styled from "styled-components";


const CardContainer = styled.div`
    width: 20%
    padding: 20px;
`;

const ColorStyledh1 = styled.h1`
    color: white;
    text-shadow: 2px 2px blue;
`;

const TextColorh4 = styled.h4`
    color: red;
`;

const TextColorh6 = styled.h6`
    color: red;
`;

const AnchorStyle = styled.a`
    text-decoration: none;
    color: dodgerBlue
`;

const TextColorP = styled.p`
    color: white;
`;



const ImageInfo = props => {
    console.log();

    return (
        <CardContainer className="img-container">
            <ColorStyledh1>{props.nasaImg.title}</ColorStyledh1>
            <TextColorh4>Copyright {props.nasaImg.copyright}</TextColorh4>
            <img src={props.nasaImg.url} alt={props.nasaImg.title} />
            <TextColorh6>{props.nasaImg.date}</TextColorh6>
            <AnchorStyle href={props.nasaImg.hdurl}>View photo in HD</AnchorStyle>
            <TextColorP>{props.nasaImg.explanation}</TextColorP>
        </CardContainer>
    )
};

export default ImageInfo;