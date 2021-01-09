import React from 'react';
import  Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveButton from '@material-ui/icons/Remove';
import AddButton from '@material-ui/icons/Add';

function FinancialGoals( {goals, setGoals}) {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
          }
        }
      }))

      const classes = useStyles();

      const removeGoal = (e, index) => {
        e.preventDefault();
        if (goals.length > 1){
            const values = [...goals];
            values.splice(index, 1);
            setGoals(values);
        }
        else{
            alert("Minimum of 1 financial goal is required!");
        }
      } 

      const addGoal = (e) => {
        e.preventDefault();
        setGoals([...goals, {goal: ''}]);
      }

      const goalHandler = (e, index) => {
        const values = [...goals];
        values[index][e.target.name] = e.target.value;
        setGoals(values);
        console.log(goals);
      }
      
    return(
    <Container>
      <form className={classes.root}>
          { goals.map((goals, index) => (
              <div key={index}>
                  <TextField 
                    name="goal"
                    label="Financial Goal"
                    required id="outlined-required" 
                    variant="outlined"
                    onChange={e => goalHandler(e, index)}>
                </TextField>
                <IconButton onClick={e => removeGoal(e, index)}>
                    <RemoveButton />
                </IconButton>
                <IconButton onClick={e => addGoal(e, index)}>
                    <AddButton />
                </IconButton>
              </div>
          ))}
        </form>
      </Container>
    )
}

export default FinancialGoals;