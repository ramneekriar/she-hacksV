import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "./images/education.png";
import Grid from "@material-ui/core/Grid";

function General() {
  return (
    <React.Fragment>
      <Grid container spacing={1}></Grid>
      <Grid item xs={12} sm={12}>
        <br />
        <br />
        <Typography variant="h4" align="left" gutterBottom>
          Introduction
        </Typography>
        <Grid item xs={12} sm={12}>
          <img src={logo} align="right" height="300" width="300" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography variant="body2" align="left" gutterBottom>
            Created by Joanne Truong, Haley Zhang, Claudia Lou, and Ramneek Kaur
          </Typography>
        </Grid>
        <br />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography variant="body1" align="left" gutterBottom>
          We are a group of Ontario University students with a motive to help
          equip girls with the financial knowledge in order to thrive.
          <br />
          <br />
          We believe that teaching children about money is important, especially
          in a society where we encourage young women to be more independent,
          financial literacy of young females are even more paramount.
        </Typography>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
export default General;
