import React, { useState } from "react";
import "./App.css";
import ApodCard from "./components/ApodCard";
import styled from "styled-components";

const ContainerWrapper = styled.div`
    text-align: center;
    width: 100%;
    background-image: url("nightSky.jpg");
`;


function App() {
  //set useState
  // const [images, getImages] = useState()
  return (
    <ContainerWrapper>
      <div className="App">
        {/* <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun!
        </p> */}
        <ApodCard />
      </div>
    </ContainerWrapper>
  );
}

export default App;
