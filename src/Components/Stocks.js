import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "./images/stocks.jpg";
import Grid from "@material-ui/core/Grid";

function Stocks() {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <Typography variant="h4" align="left" gutterBottom>
            Stocks
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body1" align="left" gutterBottom>
            A stock exchange, or stock market, is a system for buying and
            selling securities, or stocks and bonds. A stock is a share in the
            ownership of a company.
            <br />
            <br />A number of companies belong to each stock exchange. The
            companies sell securities to people. People then use the exchange to
            trade (sell and buy) the securities among themselves. The prices of
            different securities rise or fall, or both, throughout the day,
            every day the exchange is open. People make money by selling
            securities at a higher price than they paid for them.{" "}
          </Typography>
        </Grid>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Grid item xs={12} sm={2}>
          <img src={logo} height="250" width="300" />
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
export default Stocks;
