import React from "react";
import styled from "styled-components";
import "./App.css";
import Main from "./Main";
import Title from "./Component/Title";
import { Box } from "@mui/material";

function App() {
  return (
    <Blue>
      <View>
        <Title />
        <Main />
      </View>
    </Blue>
  );
}

export default App;

const Blue = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;

  position: relative;
`;

const View = styled.div`
  width: 100vw;
  height: 100vh;
`;
