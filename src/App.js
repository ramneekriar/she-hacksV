import React, {useState} from 'react';
import './App.css';
import StepperForm from './Components/StepperForm';
import  Container from '@material-ui/core/Container';


function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [money, setMoney] = useState(0);
  const [years, setYears] = useState(0);

  return (
    <div className="App">
    <Container>
      <h1>InvestInGirls</h1>
      <StepperForm 
        activeStep ={activeStep} 
        setActiveStep={setActiveStep} 
        money={money}
        setMoney={setMoney}
        fName={fName}
        setFname={setFname}
        lName={lName}
        setLname={setLname}
        years={years}
        setYears={setYears}
      ></StepperForm>
      </Container>
      </div>
  );
}

export default App;
