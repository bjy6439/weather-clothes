import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./Component/Main";
import Title from "./Component/Title";

function App() {
  return (
    <>
      <BackgroundVideo autoPlay loop muted>
        <source src="/videos/-4753.mp4" />
      </BackgroundVideo>
      <Blue>
        <Title />
        <Main />
      </Blue>
    </>
  );
}

export default App;

const Blue = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
`;

const BackgroundVideo = styled.video`
  position: absolute;
  z-index: -1;
`;
