import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

const ClothesModal = ({
  modalOn,
  setModalOn,
  modalWeather,
}: {
  modalOn: boolean;
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  modalWeather: any;
}) => {
  const [shirts, setShirts] = useState<string>("");
  const [pants, setPants] = useState<string>("");
  const [outer, setOuter] = useState<string>("");
  const [items, setItems] = useState<string>("");
  const todayTemp: number = modalWeather?.main.temp - 273.15;

  useEffect(() => {
    if (todayTemp >= 26) {
      setShirts("반팔, 민소매 ,원피스");
      setPants("반바지");
      setOuter("없음");
      setItems("선글라스");
    } else if (20 < todayTemp && todayTemp < 26) {
      setShirts("반팔, 셔츠, 얇은 긴팔");
      setPants("반바지, 면바지, 슬랙스");
      setOuter("가디건");
      setItems("선글라스, 모자");
    } else if (16 < todayTemp && todayTemp <= 20) {
      setShirts("긴팔, 블라우스, 맨투맨, 후드티");
      setPants("반바지, 면바지, 슬랙스");
      setOuter("가디건, 자켓, 야상");
      setItems("모자");
    } else if (10 < todayTemp && todayTemp <= 16) {
      setShirts("긴팔, 셔츠, 니트");
      setPants("면바지, 슬랙스, 청바지");
      setOuter("가디건");
      setItems("모자");
    } else if (todayTemp <= 10) {
      setShirts("히트텍, 긴팔, 니트, 기모");
      setPants("반바지, 면바지, 슬랙스, 기모바지");
      setOuter("패딩, 코트");
      setItems("목도리, 장갑, 모자");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalWeather]);

  const onClose = () => {
    setModalOn(false);
  };

  return (
    <Modal
      open={modalOn}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid item xs>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalWeather?.name} 옷 추천
            </Typography>
          </Grid>
          <Grid>
            <Button
              onClick={() => {
                setModalOn(false);
              }}
            >
              x
            </Button>
          </Grid>
        </Grid>
        <Grid container columnGap={5}>
          <Grid>
            <Grid item>
              {TEMPCLOTHES.map((item, idx) => {
                return (
                  <Typography
                    key={idx}
                    id="modal-modal-description"
                    sx={{ mt: 2 }}
                  >
                    {item}
                  </Typography>
                );
              })}
            </Grid>
          </Grid>
          <Grid>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {shirts}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {pants}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {outer}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {items}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ClothesModal;

const TEMPCLOTHES = ["상의", "하의", "아우터", "악세사리"];
