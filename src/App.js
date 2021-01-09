import React, {useState, useEffect} from 'react';
import './App.css';
import StepperForm from './Components/StepperForm';
import  Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <div className="App">
    <Container>
      <h1>Finance App</h1>
      <StepperForm></StepperForm>
      
      </Container>
      </div>
  );
}

export default App;
