import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

function UserInfo(props) {
  const interestRate = [
    { value: 0, label: "0.05%" },
    { value: 20, label: "0.1%" },
    { value: 40, label: "0.15%" },
    { value: 60, label: "0.2%" },
    { value: 80, label: "0.25%" },
    { value: 100, label: "0.3%" },
  ];

  function valuetext2(value) {
    return `${value}%`;
  }

  const { setFname } = props;
  const { setLname } = props;
  const { setMoney } = props;
  const { setYears } = props;

  const fnameHandler = (e) => {
    setFname(e.target.value);
  };

  const lnameHandler = (e) => {
    setLname(e.target.value);
  };

  const moneyHandler = (e) => {
    const value = e.target.value;
    if (value > 10000 || value < 0)
      alert("Investment amount must be between $0 - $10000");
    else setMoney(value);
  };

  const yearsHandler = (e) => {
    const value = e.target.value;
    if (value > 50 || value < 0)
      alert("Number of years to invest: Please enter a value between 0-50");
    else setYears(value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <TextField
            onChange={(e) => fnameHandler(e)}
            name="firstname"
            label="First Name"
            size="small"
            required
            id="outlined-required"
            fullWidth
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <br />
          <br />
          <TextField
            onChange={(e) => lnameHandler(e)}
            name="lastname"
            label="Last Name"
            size="small"
            required
            id="outlined-required"
            fullWidth
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email Address"
            size="small"
            id="outlined-required"
            fullWidth
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="age"
            label="Age"
            type="number"
            size="small"
            required
            id="outlined-required"
            fullWidth
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => yearsHandler(e)}
            name="years"
            label="Years of Investment"
            type="number"
            size="small"
            required
            id="outlined-required"
            fullWidth
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            onChange={(e) => moneyHandler(e)}
            name="years"
            label="Amount to Invest Yearly"
            type="number"
            size="small"
            required
            id="outlined-required"
            fullWidth
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography id="discrete-slider-always" gutterBottom>
            Banking rate of interest:
          </Typography>
          <Slider
            defaultValue={0}
            getAriaValueText={valuetext2}
            aria-labelledby="discrete-slider-always"
            step={null}
            marks={interestRate}
          />
          <br />
          <br />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default UserInfo;
