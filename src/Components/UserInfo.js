import React, {useState} from 'react';
import  Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function UserInfo() {

    return(
    <Container>
      <form className={classes.root}>
        <TextField 
        name="firstname"
        label="First Name"
        required id="outlined-required" 
        variant="outlined">
        </TextField>
        </form>
        <form>
        <TextField 
        name="lastname"
        label="Last Name"
        required id="outlined-required" 
        variant="outlined">
        </TextField>
      </form>
      </Container>
    )
}

export default UserInfo;