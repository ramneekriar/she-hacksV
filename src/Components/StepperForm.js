import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserInfo from './UserInfo';
import FinancialGoals from './FinancialGoals';

function StepperForm( {activeStep, setActiveStep, goals, setGoals}) {

    const nextStep = () => {
        if (activeStep < 2)
            setActiveStep((currentStep) => currentStep + 1);
    }

    const prevStep = () => {
        if (activeStep !== 0)
            setActiveStep((currentStep) => currentStep - 1);
    }

    switch(activeStep){
        case 0:
            return(
                <div>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>First</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Second</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Third</StepLabel>
                </Step>
            </Stepper>
            <UserInfo></UserInfo>
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => nextStep()}>
            Next Step
            </Button>
            <br />
            <br />
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => prevStep()}>
            Previous Step
            </Button>
        </div>
            )
        case 1:
            return (
                <div>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>First</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Second</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Third</StepLabel>
                </Step>
            </Stepper>
            <FinancialGoals goals={goals} setGoals={setGoals}></FinancialGoals>
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => nextStep()}>
            Next Step
            </Button>
            <br />
            <br />
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => prevStep()}>
            Previous Step
            </Button>
        </div>
            )
    }
    return (
        <div>
            <Stepper activeStep={activeStep}>
                <Step>
                    <StepLabel>First</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Second</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Third</StepLabel>
                </Step>
            </Stepper>
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => nextStep()}>
            Next Step
            </Button>
            <br />
            <br />
            <Button 
            variant="outlined" 
            color="primary"
            onClick={() => prevStep()}>
            Previous Step
            </Button>
        </div>
    )
}

export default StepperForm;