import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));



export default function ContainedButtons() {
  const [text, setText] = useState("Save");
  const classes = useStyles();

  function handleClick() {
    if (text === "Save") {
      setText("Edit")
    } else {
      setText("Save")
    }
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={() => handleClick()}>{text}</Button>
    </div>
  );
}
