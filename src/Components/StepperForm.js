import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import UserInfo from "./UserInfo";
import General from "./General";
import Stocks from "./Stocks";
import ETFs from "./ETFs";
import Savings from "./Savings";
import LastForm from "./LastForm";

function StepperForm({
  activeStep,
  setActiveStep,
  fName,
  setFname,
  lName,
  setLname,
  money,
  setMoney,
  years,
  setYears,
}) {
  const nextStep = () => {
    if (activeStep === 4) {
      console.log(fName);
      console.log(lName);
      console.log(years);
      console.log(money);
    }
    if (activeStep < 5) setActiveStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    if (activeStep !== 0) setActiveStep((currentStep) => currentStep - 1);
  };

  switch (activeStep) {
    default:
      return (
        <div>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>General</StepLabel>
            </Step>
            <Step>
              <StepLabel>Stocks</StepLabel>
            </Step>
            <Step>
              <StepLabel>Savings</StepLabel>
            </Step>
            <Step>
              <StepLabel>ETFs</StepLabel>
            </Step>
            <Step>
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Results</StepLabel>
            </Step>
          </Stepper>
          <General></General>
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextStep()}
          >
            Continue
          </Button>
          <br />
          <br />
        </div>
      );
    case 1:
      return (
        <div>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>General</StepLabel>
            </Step>
            <Step>
              <StepLabel>Stocks</StepLabel>
            </Step>
            <Step>
              <StepLabel>Savings</StepLabel>
            </Step>
            <Step>
              <StepLabel>ETFs</StepLabel>
            </Step>
            <Step>
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Results</StepLabel>
            </Step>
          </Stepper>
          <Stocks></Stocks>
          <Button
            variant="contained"
            color="primary"
            onClick={() => prevStep()}
          >
            Previous
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextStep()}
          >
            Continue
          </Button>
          <br />
          <br />
        </div>
      );
    case 2:
      return (
        <div>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>General</StepLabel>
            </Step>
            <Step>
              <StepLabel>Stocks</StepLabel>
            </Step>
            <Step>
              <StepLabel>Savings</StepLabel>
            </Step>
            <Step>
              <StepLabel>ETFs</StepLabel>
            </Step>
            <Step>
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Results</StepLabel>
            </Step>
          </Stepper>
          <Savings></Savings>
          <Button
            variant="contained"
            color="primary"
            onClick={() => prevStep()}
          >
            Previous
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextStep()}
          >
            Continue
          </Button>
          <br />
          <br />
        </div>
      );
    case 3:
      return (
        <div>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>General</StepLabel>
            </Step>
            <Step>
              <StepLabel>Stocks</StepLabel>
            </Step>
            <Step>
              <StepLabel>Savings</StepLabel>
            </Step>
            <Step>
              <StepLabel>ETFs</StepLabel>
            </Step>
            <Step>
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Results</StepLabel>
            </Step>
          </Stepper>
          <ETFs></ETFs>
          <Button
            variant="contained"
            color="primary"
            onClick={() => prevStep()}
          >
            Previous
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextStep()}
          >
            Start
          </Button>
          <br />
          <br />
        </div>
      );
    case 4:
      return (
        <div>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>General</StepLabel>
            </Step>
            <Step>
              <StepLabel>Stocks</StepLabel>
            </Step>
            <Step>
              <StepLabel>Savings</StepLabel>
            </Step>
            <Step>
              <StepLabel>ETFs</StepLabel>
            </Step>
            <Step>
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Results</StepLabel>
            </Step>
          </Stepper>
          <UserInfo
            setFname={setFname}
            setLname={setLname}
            setMoney={setMoney}
            setYears={setYears}
          ></UserInfo>
          <Button
            variant="contained"
            color="primary"
            onClick={() => prevStep()}
          >
            Previous
          </Button>
          &nbsp;&nbsp;&nbsp;
          <Button
            variant="contained"
            color="primary"
            onClick={() => nextStep()}
          >
            Submit
          </Button>
          <br />
          <br />
        </div>
      );
    case 5:
      return (
        <div>
          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>General</StepLabel>
            </Step>
            <Step>
              <StepLabel>Stocks</StepLabel>
            </Step>
            <Step>
              <StepLabel>Savings</StepLabel>
            </Step>
            <Step>
              <StepLabel>ETFs</StepLabel>
            </Step>
            <Step>
              <StepLabel>User Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Results</StepLabel>
            </Step>
          </Stepper>
          <LastForm
            fName={fName}
            lName={lName}
            money={money}
            years={years}
          ></LastForm>
          <Button
            variant="contained"
            color="primary"
            onClick={() => prevStep()}
          >
            Start Over
          </Button>
          &nbsp;&nbsp;&nbsp;
          <br />
          <br />
        </div>
      );
  }
}

export default StepperForm;
