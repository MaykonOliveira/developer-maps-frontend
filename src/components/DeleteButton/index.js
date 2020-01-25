import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    "&:focus": {
      outline: "none"
    }
  }
}));

export default function DeleteButton( { onClick } ) {
  const classes = useStyles();

  return (
    <IconButton aria-label="delete" size="small" className={classes.root} onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
}
