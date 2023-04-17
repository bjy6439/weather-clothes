import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HourCard = ({ weathers, delCity }: { weathers?: any; delCity: any }) => {
  const [imgUrl, setImgUrl] = useState<string>("");

  console.log(imgUrl);
  useEffect(() => {
    addImg();
  }, [weathers]);

  const addImg = () => {
    if (weathers.name === "Seoul") {
      setImgUrl("/images/seoul.jpg");
    } else if (weathers.name === "Incheon") {
      setImgUrl("/images/Incheon.jpeg");
    } else if (weathers.name === "Subu-mal") {
      setImgUrl("/images/gyungido.jpeg");
    } else if (weathers.name === "Busan") {
      setImgUrl("/images/busan.jpg");
    } else if (weathers.name === "Daegu") {
      setImgUrl("/images/daegu.webp");
    } else if (weathers.name === "Yach’on") {
      setImgUrl("/images/ghangju.jpg");
    } else if (weathers.name === "Daejeon") {
      setImgUrl("/images/daejun.avif");
    } else if (weathers.name === "Ulsan") {
      setImgUrl("/images/ulsan.jpeg");
    } else if (weathers.name === "Gongju") {
      setImgUrl("/images/sejong.jpeg");
    } else if (weathers.name === "Gangwon-do") {
      setImgUrl("/images/ganwondo.jpg");
    } else if (weathers.name === "Changwon") {
      setImgUrl("/images/gyungsang-namdo.jpeg");
    } else if (weathers.name === "Cheongsong gun") {
      setImgUrl("/images/gyungsang-bukdo.jpeg");
    } else if (weathers.name === "Jeollanam-do") {
      setImgUrl("/images/junla-namdo.webp");
    } else if (weathers.name === "Jeollabuk-do") {
      setImgUrl("/images/junla-bukdo.jpeg");
    } else if (weathers.name === "Hongseong") {
      setImgUrl("/images/chung-nam.jpeg");
    } else if (weathers.name === "Angol") {
      setImgUrl("/images/chung-buk.avif");
    } else if (weathers.name === "Jeju City") {
      setImgUrl("/images/jeju.webp");
    }
  };

  return (
    <>
      {weathers && (
        <Grid>
          <TitleBox>
            <SubTitle>{weathers?.name}</SubTitle>
            <DelBtn
              onClick={(e) => {
                delCity(weathers.name);
                e.stopPropagation();
              }}
            >
              x
            </DelBtn>
          </TitleBox>
          <CardBox>
            <img src={imgUrl} alt="weather" width={300} height={300} />
          </CardBox>
        </Grid>
      )}
    </>
  );
};

export default HourCard;

const TitleBox = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 3px;
  background-color: #6485e7;
  color: white;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
`;

const DelBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 17px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
`;

const SubTitle = styled.p`
  font-size: 25px;
`;
