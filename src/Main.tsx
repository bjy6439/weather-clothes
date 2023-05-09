import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Modal,
  Button,
  Input,
  TextField,
} from "@mui/material";
import HourCard from "./Component/HourCard";
import AddCard from "./Component/AddCard";
import CityAddModal from "./Component/CityAddModal";
import axios from "axios";
import WeeklyWeather from "./Component/WeeklyWeather";
import styled from "styled-components";
import Map from "./Component/Map";

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  height: "55vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const inputStyle = {
  // transform: "translate(-55%, -55%)",
  width: "80%",
  height: "10px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Main = () => {
  const [lat, setLat] = useState<number>(37.5665);
  const [lang, setLang] = useState<number>(126.978);
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [isAddCity, setIsAddCity] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("서울");
  const [isMap, setIsMap] = useState(false);
  const [addres, setAddres] = useState<string>("");

  console.log(weatherList);
  console.log(lat, lang);
  useEffect(() => {
    addWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const mapClose = () => {
    setIsMap(false);
  };

  const addWeatherFromMap = () => {
    addWeather();
    setAddres("");
    mapClose();
  };

  return (
    <>
      <Container maxWidth="xl">
        <Modal
          open={isMap}
          onClose={mapClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <Box sx={style}>
              <Map addres={addres} setLat={setLat} setLang={setLang} />
              <Grid container justifyContent="center">
                <TextField
                  id="standard-basic"
                  label="주소를 입력하세요."
                  variant="standard"
                  value={addres}
                  onChange={(e) => {
                    setAddres(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addWeatherFromMap();
                    }
                  }}
                />
                <Button onClick={addWeatherFromMap}>날씨 검색</Button>
              </Grid>
            </Box>
          </>
        </Modal>
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
                  <Grid key={weather.dt} item md={3} sm={6} xs={12}>
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
            {weatherList.length > 3 ? null : (
              <Grid item xs={12} md={12} sm={12} m={3} textAlign="center">
                <Button onClick={addCity}>추가하기</Button>
                <Button
                  onClick={() => {
                    setIsMap(true);
                  }}
                >
                  지도로 추가하기
                </Button>
              </Grid>
            )}
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
