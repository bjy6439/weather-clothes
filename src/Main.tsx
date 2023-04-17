import React, { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import HourCard from "./Component/HourCard";
import AddCard from "./Component/AddCard";
import ClothesModal from "./Component/ClothesModal";
import CityAddModal from "./Component/CityAddModal";

const Main = () => {
  const [lat, setLat] = useState<number>(37.5665);
  const [lang, setLang] = useState<number>(126.978);
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [isAddCity, setIsAddCity] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("서울");
  const [modalWeather, setModalWeater] = useState<{}>();
  const [modalOn, setModalOn] = useState<boolean>(false);

  console.log(modalWeather);

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
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 10 }}
          justifyContent="center"
        >
          {weatherList?.map((weather) => {
            return (
              <>
                <Grid key={weather.id} item md={3} sm={6} xs={12}>
                  <div onClick={() => setModalWeater(weather)}>
                    <HourCard
                      weathers={weather}
                      delCity={delCity}
                      modalOn={modalOn}
                      setModalOn={setModalOn}
                    />
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
            isAddCity={isAddCity}
            addWeather={addWeather}
            addCity={addCity}
            addInfo={addInfo}
            selectCity={selectCity}
          />
        )}
        <ClothesModal
          modalOn={modalOn}
          setModalOn={setModalOn}
          modalWeather={modalWeather}
        />
      </Container>
    </>
  );
};

export default Main;
