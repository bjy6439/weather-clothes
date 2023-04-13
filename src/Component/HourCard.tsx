import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

const HourCard = ({
  hour,
  weather,
  clothes,
  temp,
}: {
  hour: string;
  weather: string;
  clothes: string;
  temp: number;
}) => {
  return (
    <Grid item md={3} sm={6} xs={12}>
      <CardBox>
        <Typography variant="body1" textAlign="center">
          {hour} 날씨
        </Typography>
        <Cs>기온 : {temp}</Cs>
        <TodayWeather>날씨 : {weather}</TodayWeather>
        <Clothes>옷추천 : {clothes}</Clothes>
      </CardBox>
    </Grid>
  );
};

export default HourCard;

const CardBox = styled.div`
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const Cs = styled.div`
  padding: 4px;
`;
const TodayWeather = styled.div`
  padding: 4px;
`;
const Clothes = styled.div`
  padding: 4px;
`;
