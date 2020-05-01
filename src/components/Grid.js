import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BasicTextFields from "./Textfield.js";
import ContainedButtons from "./Button.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={5}>
        <Grid
          container={true}
          item
          direction={"row"}
          justify={"flex-start"}
          xs={12}
        >
          <Paper className={classes.paper}>
            <h1>9am</h1>
          </Paper>
          <Paper className={classes.paper}>{BasicTextFields()}</Paper>
          <Paper className={classes.paper}>{ContainedButtons()}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
