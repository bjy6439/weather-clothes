import { Grid, Typography } from "@mui/material";
import React from "react";

const Title = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12} sm={12} textAlign="center" padding={5}>
        <Typography variant="h2">Weather Clothes</Typography>
      </Grid>
    </Grid>
  );
};

export default Title;
