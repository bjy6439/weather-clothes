import styled from "styled-components";
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const WeeklyWeather = ({ lat, lang }: { lat: number; lang: number }) => {
  const [dayWeather, setDayWeather] = useState<[]>();
  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    dailyWeather();
  }, [lat, lang]);

  const dailyWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lang}&appid=84dcb4d3f1bc848c2c5f39929eed4e94
        `
      )
      .then((res) => {
        setDayWeather(res.data.list);
        setCityName(res.data.city.name);
      });
  };

  return (
    <Container fixed>
      <Grid container mt={5}>
        <Grid item mb={2}>
          <SubTitle>{cityName}의 시간별 날씨 및 온도</SubTitle>
        </Grid>
      </Grid>
      <Style>
        <Grid container justifyContent="center" alignItems="center">
          {dayWeather?.map(
            (
              {
                dt_txt,
                dt,
                main,
                weather,
              }: {
                dt_txt: string;
                dt: number;
                main: any;
                weather: any;
              },
              idx
            ) => {
              const maxTemp = Math.ceil(main.temp_max - 273.15);
              const minTemp = Math.ceil(main.temp_min - 273.15);
              const [date, time] = dt_txt.split(" ");
              const [year, month, day] = date.split("-");
              const [hour, minute, second] = time.split(":");

              return (
                <>
                  <Grid key={idx} item xs={3} sm={3} md={3} textAlign="center">
                    <TimeList>{`${month}/${day} ${hour}시`}</TimeList>
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} textAlign="center">
                    <Icon
                      src={`${`http://openweathermap.org/img/wn/${weather[0].icon}.png`}`}
                      alt="weatherIcon"
                    />
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} textAlign="center">
                    <TimeList>{minTemp}C'</TimeList>
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} textAlign="center">
                    <TimeList>{maxTemp}C'</TimeList>
                  </Grid>
                </>
              );
            }
          )}
        </Grid>
      </Style>
    </Container>
  );
};

export default WeeklyWeather;

const SubTitle = styled.p`
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;
const Icon = styled.img`
  width: 80px;
`;

const TimeList = styled.p`
  font-size: 20px;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const Style = styled.div`
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
