import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function LastForm() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  return (
    <Container>
      <Button 
      variant="contained"
      color="primary"
      type="submit"
      >Submit</Button>
    </Container>
  );
}

export default LastForm;
