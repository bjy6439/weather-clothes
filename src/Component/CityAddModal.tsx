import { Box, Button, Grid, Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";
import SelectCity from "./SelectCity";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CityAddModal = ({
  setIsAddCity,
  isAddCity,
  addWeather,
  addCity,
  addInfo,
  selectCity,
}: {
  isAddCity: any;
  addWeather: any;
  addCity: any;
  addInfo: any;
  selectCity: any;
  setIsAddCity: any;
}) => {
  const onClose = () => {
    setIsAddCity(false);
  };

  return (
    <Modal
      open={isAddCity}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container justifyContent="center" alignItems="center">
          <FormBox>
            <Grid>
              <div>
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
              </div>
            </Grid>
          </FormBox>
          <Grid item>
            <Button
              onClick={() => {
                addWeather();
                addCity();
              }}
            >
              생성하기
            </Button>
            <Button onClick={addCity}>취소</Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CityAddModal;

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
`;

const CityUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;

const CITYONE = [
  {
    id: 1,
    cityName: "서울",
    lat: 37.5665,
    lang: 126.978,
  },
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
