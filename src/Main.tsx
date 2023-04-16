import React, { useState } from "react";
import { Grid, Container, Button, Typography } from "@mui/material";
import HourCard from "./Component/HourCard";
import AddCard from "./Component/AddCard";
import styled from "styled-components";
import SelectCity from "./Component/SelectCity";
import ClothesSelect from "./Component/ClothesSelect";

const Main = () => {
  const [lat, setLat] = useState<number>(37.5665);
  const [lang, setLang] = useState<number>(126.978);
  const [weatherList, setWeatherList] = useState<any[]>([]);
  const [isAddCity, setIsAddCity] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("서울");

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
          {weatherList?.map((weather, idx) => {
            return (
              <>
                <Grid item md={3} sm={6} xs={12}>
                  <HourCard key={idx} weathers={weather} delCity={delCity} />
                </Grid>
              </>
            );
          })}
          {weatherList.length > 3 ? null : <AddCard addCity={addCity} />}
        </Grid>
        <Grid maxWidth="xl">
          {/* <Modal> */}
          <ClothesSelect />
          {/* </Modal> */}
        </Grid>
        {isAddCity && (
          <AddModal>
            <Grid item justifyContent="center" alignItems="center">
              <FormBox>
                <Grid>
                  <CityWrap>
                    <CityUl>
                      <SelectCity
                        CITYONE={CITYONE}
                        selectCity={selectCity}
                        addInfo={addInfo}
                      />
                      <SelectCity
                        CITYONE={CITYTWO}
                        selectCity={selectCity}
                        addInfo={addInfo}
                      />
                    </CityUl>
                  </CityWrap>
                </Grid>
              </FormBox>
            </Grid>
            <div>
              <Button
                onClick={() => {
                  addWeather();
                  addCity();
                }}
              >
                생성하기
              </Button>
              <Button onClick={addCity}>취소</Button>
            </div>
          </AddModal>
        )}
      </Container>
    </>
  );
};

export default Main;

const Modal = styled.div`
  @media screen and (max-width: 600px) {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
  }
`;

const AddModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 1;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
  border-radius: 4px;
`;

const CityWrap = styled.div``;

const CityUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

const CITYONE = [
  { id: 1, cityName: "서울", lat: 37.5665, lang: 126.978 },
  { id: 2, cityName: "인천", lat: 37.4563, lang: 126.7052 },
  { id: 3, cityName: "대구", lat: 35.8714, lang: 128.6014 },
  { id: 4, cityName: "대전", lat: 36.3504, lang: 127.3845 },
  { id: 5, cityName: "세종", lat: 36.480132, lang: 127.289021 },
  { id: 6, cityName: "경남", lat: 35.2383, lang: 128.6922 },
  { id: 7, cityName: "전남", lat: 34.8679, lang: 126.991 },
  { id: 8, cityName: "충남", lat: 36.5184, lang: 126.8 },
  { id: 9, cityName: "제주", lat: 33.489, lang: 126.4983 },
];

const CITYTWO = [
  { id: 10, cityName: "경기", lat: 37.4138, lang: 127.5183 },
  { id: 11, cityName: "부산", lat: 35.1796, lang: 129.0756 },
  { id: 12, cityName: "광주", lat: 35.1605, lang: 126.8514 },
  { id: 13, cityName: "울산", lat: 35.5384, lang: 129.3114 },
  { id: 14, cityName: "강원", lat: 37.8228, lang: 128.1555 },
  { id: 15, cityName: "경북", lat: 36.4919, lang: 128.8889 },
  { id: 16, cityName: "전북", lat: 35.7167, lang: 127.1447 },
  { id: 17, cityName: "충북", lat: 36.9959, lang: 127.7103 },
];
