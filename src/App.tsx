import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./Main";
import Title from "./Component/Title";

function App() {
  return (
    <>
      <Blue>
        <View>
          {/* <BackgroundVideo autoPlay loop muted>
            <source src="/videos/-4753.mp4" />
          </BackgroundVideo> */}
          <Title />
          <Main />
        </View>
      </Blue>
    </>
  );
}

export default App;

const Blue = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
`;

const BackgroundVideo = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const View = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
