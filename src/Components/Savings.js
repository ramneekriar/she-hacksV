import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "./images/savings.png";
import Grid from "@material-ui/core/Grid";

function Savings() {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <Typography variant="h4" align="left" gutterBottom>
            Savings
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body1" align="left" gutterBottom>
            A kids' or youth savings account provides a great opportunity to
            learn about managing money, saving for the future, and other aspects
            of personal finance starting at an early age. <br />
            <br />
            There are several reasons as to why having a savings account at a
            young age is great. Some of which include: to help learn more about
            money and finance, to learn more about banking, to help develop the
            habit of saving your own money that you recieve from allowances, and
            to save money for many short-time financial goals.
          </Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Grid item xs={12} sm={2}>
          <img src={logo} height="250" width="350" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Savings;
