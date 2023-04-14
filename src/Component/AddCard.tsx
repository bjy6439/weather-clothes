import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { TypeFlags } from "typescript";

const AddCard = ({ addCity }: { addCity: any }) => {
  return (
    <Grid item md={3} sm={6} xs={12}>
      <AddButton onClick={addCity}>
        <Typography variant="h1">+</Typography>
      </AddButton>
    </Grid>
  );
};

export default AddCard;

const AddButton = styled.div`
  cursor: pointer;
`;
