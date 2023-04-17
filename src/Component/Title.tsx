import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Title = () => {
  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={12} md={12} sm={12} mb={2} textAlign="center">
          <NavBar>
            <SubTitle>Weather Clothes</SubTitle>
          </NavBar>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Title;

const NavBar = styled.div`
  background-color: #74abe3;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const SubTitle = styled.p`
  padding: 30px;
  font-size: 60px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
