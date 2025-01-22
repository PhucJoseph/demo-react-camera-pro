import logo from './logo.svg';
import './App.css';

import React, { useState, useRef } from "react";
import {Camera} from "react-camera-pro";

const Component = () => {
  const camera = useRef(null);
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [image, setImage] = useState(null);

  return (
    <>
    <Camera ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
      <img src={image} alt='Image preview' />
      <button
        onClick={() => {
            const photo = camera.current.takePhoto();
            setImage(photo);
        }}
      >Shoot</button>
      <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      >Change</button>
    </>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
