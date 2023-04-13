import React from "react";
import { Grid, Container } from "@mui/material";
import HourCard from "./HourCard";

const Main = () => {
  return (
    <Container maxWidth="xl">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
        {WEATHERDATA.map(({ hour, weather, clothes, temp }) => {
          return (
            <HourCard
              hour={hour}
              weather={weather}
              clothes={clothes}
              temp={temp}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Main;

const WEATHERDATA = [
  { hour: "00:00 ~ 06:00", weather: "선선함", clothes: "kadigun", temp: 12 },
  { hour: "06:00 ~ 12:00", weather: "이슬비", clothes: "kadigun", temp: 12 },
  { hour: "12:00 ~ 18:00", weather: "비", clothes: "kadigun", temp: 12 },
  { hour: "18:00 ~ 24:00", weather: "해 쨍쨍", clothes: "kadigun", temp: 12 },
];
