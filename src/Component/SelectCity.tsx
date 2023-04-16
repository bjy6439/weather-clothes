import React from "react";
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
            <CityBtn disabled={selectCity === cityName}>
              <CityLi
                key={id}
                onClick={(e) => {
                  addInfo(e, lat, lang);
                }}
              >
                {cityName}
              </CityLi>
            </CityBtn>
          );
        }
      )}
    </div>
  );
};

export default SelectCity;

const CityLi = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
`;

const CityBtn = styled.button`
  background-color: #33abd7a7;
  border: none;
  margin: 2px;
  border-radius: 3px;

  &:disabled {
    background-color: #7acae8;

    color: #ffffff;
  }
`;
