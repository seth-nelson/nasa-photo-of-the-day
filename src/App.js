import React, { useState } from "react";
import "./App.css";
import ApodCard from "./components/ApodCard";

function App() {
  //set useState
  // const [images, getImages] = useState()
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p> */}
      <ApodCard />
    </div>
  );
}

export default App;
