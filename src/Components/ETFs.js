import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "./images/etfs.png";
import Grid from "@material-ui/core/Grid";

function ETFs() {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <Typography variant="h4" align="left" gutterBottom>
            Exchange-Traded Funds
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant="body1" align="left" gutterBottom>
            ETFs are baskets of stocks, much like mutual funds, that trade like
            stocks. You can buy and sell them using your online broker just like
            you would with other stocks. <br />
            <br />
            All ETFs have trading symbols and qualify for the low commission
            rates from online brokers. Several online brokers, including
            Fidelity and Charles Schwab, even let you trade some ETFs for no
            commission. You can even get price quotes by using your favorite
            stock-tracking Web sites. Online investors like ETFs because they’re
            easy to buy without the hassle of signing up for accounts with
            mutual fund companies or checking to see whether they’re
            transaction-free. ETFs have the same advantages of mutual funds.{" "}
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
export default ETFs;
