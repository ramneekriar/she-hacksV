import React, {useState, useEffect} from 'react';
import './App.css';
import StepperForm from './Components/StepperForm';
import  Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [goals, setGoals] = useState([
    { goal: ''}]);

  return (
    <div className="App">
    <Container>
      <h1>Finance App</h1>
      <StepperForm 
        activeStep ={activeStep} setActiveStep={setActiveStep} goals={goals} setGoals={setGoals}
      ></StepperForm>
      </Container>
      </div>
  );
}

export default App;
