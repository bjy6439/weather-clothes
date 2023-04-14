import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import HourCard from "./HourCard";
import AddCard from "./AddCard";

const Main = () => {
  const [lat, setLat] = useState<string>("35.1796");
  const [lang, setLang] = useState<string>("129.0756");
  const [weatherList, setWeatherList] = useState<any[]>([]);

  useEffect(() => {
    addCity();
  }, []);

  const addCity = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=84dcb4d3f1bc848c2c5f39929eed4e94
      `
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherList([...weatherList, data]);
      });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
          {weatherList?.map((weather, idx) => {
            return <HourCard key={idx} weathers={weather} />;
          })}
          {weatherList.length > 3 ? null : <AddCard addCity={addCity} />}
        </Grid>
      </Container>
    </>
  );
};

export default Main;
