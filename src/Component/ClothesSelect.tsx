import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ClothesSelect = () => {
  return (
    <Grid container mt={10}>
      <Grid item md={12} sm={12} xs={12}>
        <TitleBox>
          <Typography variant="h5">옷 추천</Typography>
        </TitleBox>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item sm={6} md={3} xs={12}>
          <CardBox>
            <Typography>상의</Typography>
            <ImgBox src="/images/shirt.png" alt="#" />
          </CardBox>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <CardBox>
            <Typography>하의</Typography>
            <ImgBox src="/images/longPants.png" alt="#" />
          </CardBox>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <CardBox>
            <Typography>아우터</Typography>
            <ImgBox src="/Images/coat.png" alt="#" />
          </CardBox>
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <CardBox>
            <Typography>잡화</Typography>
            <ImgBox src="/images/coat.png" alt="#" />
          </CardBox>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ClothesSelect;

const TitleBox = styled.div`
  position: relative;
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

const ImgBox = styled.img`
  width: 200px;
  height: 200px;
`;
