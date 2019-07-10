import React from "react";
import Grid from "@material-ui/core/Grid";
import classes from "./Grid.module.css";

const grid = props => {
  const itemClassGrid = props.item && !props.nopadding ? classes.Grid : null;
 
  return (
    <Grid className={itemClassGrid} {...props}>
      {props.children}
    </Grid>
  );
};

export default grid;
