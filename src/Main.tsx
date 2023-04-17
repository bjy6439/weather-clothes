import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import HourCard from "./Component/HourCard";
import AddCard from "./Component/AddCard";
import CityAddModal from "./Component/CityAddModal";
import axios from "axios";
import WeeklyWeather from "./Component/WeeklyWeather";
import styled from "styled-components";

const BoxStyle = {
  boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

const Main = () => {
  const [lat, setLat] = useState<number>(37.5665);
  const [lang, setLang] = useState<number>(126.978);
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [isAddCity, setIsAddCity] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("서울");

  useEffect(() => {
    addWeather();
  }, []);

  const addWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=84dcb4d3f1bc848c2c5f39929eed4e94
    `
      )
      .then((res) => {
        setWeatherList([...weatherList, res.data]);
        setSelectCity("서울");
      });
  };

  const addCity = () => {
    setIsAddCity(!isAddCity);
  };

  const addInfo = (e: any, lat: number, lang: number) => {
    setLang(lang);
    setLat(lat);
    setSelectCity(e.target.outerText);
  };

  const delCity = (value: string) => {
    setWeatherList((prev) => prev.filter((weather) => weather.name !== value));
  };

  return (
    <>
      <Container maxWidth="xl">
        <Style>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 10 }}
            justifyContent="center"
          >
            {weatherList?.map((weather, idx) => {
              return (
                <>
                  <Grid key={idx} item md={3} sm={6} xs={12}>
                    <div
                      onClick={() => {
                        setLang(weather.coord.lon);
                        setLat(weather.coord.lat);
                      }}
                    >
                      <HourCard weathers={weather} delCity={delCity} />
                    </div>
                  </Grid>
                </>
              );
            })}
            {weatherList.length > 3 ? null : <AddCard addCity={addCity} />}
          </Grid>
          <Grid maxWidth="xl"></Grid>
          {isAddCity && (
            <CityAddModal
              setIsAddCity={setIsAddCity}
              isAddCity={isAddCity}
              addWeather={addWeather}
              addCity={addCity}
              addInfo={addInfo}
              selectCity={selectCity}
            />
          )}
          <WeeklyWeather lat={lat} lang={lang} />
        </Style>
      </Container>
    </>
  );
};

export default Main;

const Style = styled.div`
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const TopButton = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 1px solid black;
  border-radius: 50%;
  background-color: white;
`;
