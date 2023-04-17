import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
import styled from "styled-components";

interface CityList {
  id: number;
  cityName: string;
  lat: number;
  lang: number;
}

const SelectCity = ({
  CITYONE,
  selectCity,
  addInfo,
}: {
  CITYONE: CityList[];
  selectCity: string;
  addInfo: any;
}) => {
  return (
    <div>
      {CITYONE.map(
        ({
          cityName,
          id,
          lat,
          lang,
        }: {
          cityName: string;
          id: number;
          lat: number;
          lang: number;
        }) => {
          return (
            <Container>
              <Grid container rowSpacing={1} justifyContent="center">
                <CityLi
                  key={id}
                  onClick={(e) => {
                    addInfo(e, lat, lang);
                  }}
                >
                  <Button
                    variant="contained"
                    disabled={selectCity === cityName}
                  >
                    {cityName}
                  </Button>
                </CityLi>
              </Grid>
            </Container>
          );
        }
      )}
    </div>
  );
};

export default SelectCity;

const CityLi = styled.li`
  @media screen and (-width: 600px) {
    display: flex;
    flex-direction: column;
  }
  list-style: none;
  padding: 10px;
  cursor: pointer;
`;
