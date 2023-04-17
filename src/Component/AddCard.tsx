import { Grid } from "@mui/material";
import styled from "styled-components";

const AddCard = ({ addCity }: { addCity?: any }) => {
  return (
    <Grid item md={3} sm={6} xs={12} onClick={addCity}>
      <TitleBox>
        <SubTitle>추가하기</SubTitle>
      </TitleBox>
      <AddButton>
        <SubTitle>+</SubTitle>
      </AddButton>
    </Grid>
  );
};

export default AddCard;

const AddButton = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  cursor: pointer;
`;

const TitleBox = styled.div`
  margin-bottom: 10px;
  padding: 3px;
  background-color: #6485e7;
  color: white;
  font-weight: 700;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;

const SubTitle = styled.p`
  font-size: 25px;
`;
