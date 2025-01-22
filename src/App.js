import logo from "./logo.svg";
import "./App.css";

import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";

const Component = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

  return (
    <>
      <div style={{ width: "300px", height: "300px" }}>
        {" "}
        <Camera
          ref={camera}
          aspectRatio={4 / 3}
          numberOfCamerasCallback={setNumberOfCameras}
        />
      </div>
      <img src={image} alt="Image preview" />
      <button
        onClick={() => {
          const photo = camera.current.takePhoto();
          setImage(photo);
        }}
      >
        Shoot
      </button>
      <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      >
        Change
      </button>
    </>
  );
};
function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

export default App;
