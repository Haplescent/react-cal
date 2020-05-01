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

export default function CenteredGrid(props) {
  const classes = useStyles();

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
          <Grid item xs={6}>
            <Paper Paper className={classes.paper}>{BasicTextFields()}</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>{ContainedButtons()}</Paper>
          </Grid>
        </Grid>
    </div>
  );
}
