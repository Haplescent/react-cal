import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(1),
    }
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid(props) {
  let classes = useStyles();
  const [textInput, setTextInput] = useState("");
  const [text, setText] = useState("Save");


  function handleClick() {
    if (text === "Save") {
      setText("Edit")
    } else {
      setText("Save")
    }
  }

  function ContainedButtons() {
    return (
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <div className={classes.root}>
            <Button variant="contained" onClick={() => handleClick()}>{text}</Button>
          </div>
        </Paper>
      </Grid>
    );
  }

  function BasicTextFields() {
    let useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
        "& > *": {
          margin: theme.spacing(1),
          width: "100ch"
        }
      },
      paper: {
        padding: theme.spacing(0),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
    }));

    let classes = useStyles();

    if (text === "Save") {
      return (
        <Grid item xs={6}>
          <Paper Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Write Task Here" />
            </form>
          </Paper>
        </Grid>
      );
    } else {
      return (
        <Grid item xs={6}>
          <Paper Paper className={classes.paper}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField disabled id="standard-basic" label="Write Task Here" />
            </form>
          </Paper>
        </Grid>
      )
    }

  }

  return (
    <div className={classes.root}>
        <Grid
          container spacing={0}
          container={true}
          item
          direction={"row"}
          justify={"flex-start"}
        >
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <h1>{props.hour}</h1>
            </Paper>
          </Grid>
          {BasicTextFields()}
          {ContainedButtons()}
        </Grid>
    </div>
  );
}
