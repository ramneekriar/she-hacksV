import React, {useState} from 'react';
import  Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

function UserInfo() {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
          }
        }
      }))

      const marks = [
        { value: 0, label: '$0', },
        { value: 5, },
        { value: 10, label: '$1000', },
        { value: 15, },
        { value: 20, label: '$2000', },
        { value: 25, },
        { value: 30, label: '$3000', },
        { value: 35, },
        { value: 40, label: '$4000', },
        { value: 45, },
        { value: 50, label: '$5000', },
        { value: 55, },
        { value: 60, label: '$6000', },
        { value: 65, },
        { value: 70, label: '$7000', },
        { value: 75, },
        { value: 80, label: '$8000', },
        { value: 85, },
        { value: 90, label: '$9000', },
        { value: 95, },
        { value: 100, label: '$10,000', },
      ];
    
      function valuetext(value) {
        return `${value}`;
      }

      const classes = useStyles();

      const [fName, setFname] = useState("");
      const [lName, setLname] = useState("");

      const fnameHandler = (e) => {
        setFname(e.target.value);
      }

      const lnameHandler = (e) => {
        setLname(e.target.value);
      }
      
    return(
    <Container>
      <form className={classes.root}>
        <TextField 
        onChange={e => fnameHandler(e)}
        name="firstname"
        label="First Name"
        required id="outlined-required" 
        variant="outlined">
        </TextField>
        </form>
        <form>
        <TextField 
        onChange={e => lnameHandler(e)}
        name="lastname"
        label="Last Name"
        required id="outlined-required" 
        variant="outlined">
        </TextField>
      </form>
      <form className={classes.root}>
        <TextField
          name="age"
          label="Age"
          size="small"
          required id="outlined-required"
          variant="outlined">
        </TextField>
        <TextField
          name="years"
          label="Years of Investment"
          size="small"
          required id="outlined-required"
          variant="outlined">
        </TextField>
      </form>
      <br />
      <br />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Amount of money you would like to invest:
</Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={null}
        marks={marks}
      />
      </Container>
    )
}

export default UserInfo;