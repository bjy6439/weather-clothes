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
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;
`;

const View = styled.div`
  width: 100vw;
  height: 100vh;
`;
