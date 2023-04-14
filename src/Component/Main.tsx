import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import HourCard from "./HourCard";
import AddCard from "./AddCard";
import styled from "styled-components";

const Main = () => {
  const [lat, setLat] = useState<string>("35.1796");
  const [lang, setLang] = useState<string>("129.0756");
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [isAddCity, setIsAddCity] = useState<boolean>(false);

  useEffect(() => {
    addWeather();
  }, []);

  const addWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=84dcb4d3f1bc848c2c5f39929eed4e94
      `
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherList([...weatherList, data]);
      });
  };

  const addCity = () => {
    setIsAddCity(!isAddCity);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          justifyContent="center"
        >
          {weatherList?.map((weather, idx) => {
            return <HourCard key={idx} weathers={weather} />;
          })}
          {weatherList.length > 3 ? null : <AddCard addCity={addCity} />}
        </Grid>
        {isAddCity && (
          <AddModal>
            <ModalNav>
              <button onClick={addCity}>x</button>
            </ModalNav>
            <Container fixed>
              <Grid>asd</Grid>
            </Container>
          </AddModal>
        )}
      </Container>
    </>
  );
};

export default Main;

const AddModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1;
`;

const ModalNav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #6485e7;
  width: 100%;
  height: 4%;
`;
