import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

const HourCard = ({ weathers }: { weathers?: any }) => {
  const IconUrl = `http://openweathermap.org/img/wn/${weathers.weather[0]?.icon}.png`;
  const Temp = weathers?.main;

  return (
    <>
      {weathers && (
        <Grid item md={3} sm={6} xs={12}>
          <TitleBox>
            <Typography variant="h5" fontWeight="bold">
              {weathers?.name}
            </Typography>
          </TitleBox>
          <CardBox>
            <img src={IconUrl} alt="weather" width={80} height={80} />
            <Typography variant="body1">
              현재기온 : 약 {Math.ceil(Temp.temp - 273.15)} C
            </Typography>
            <Typography variant="body1">
              최고기온 : 약 {Math.ceil(Temp.temp_max - 273.15)} C
            </Typography>
            <Typography variant="body1">
              최저기온 : 약 {Math.ceil(Temp.temp_min - 273.15)} C
            </Typography>
          </CardBox>
        </Grid>
      )}
    </>
  );
};

export default HourCard;

const TitleBox = styled.div`
  margin-bottom: 10px;
  padding: 20px;
  background-color: #6485e7;
  color: white;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
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
