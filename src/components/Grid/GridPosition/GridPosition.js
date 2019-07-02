import React from "react";
import Grid from "../Grid";
// import classes from "./GridPosition.module.css";

const gridPosition = props => {
  const gridItems = {
    two: {
      center: {
        xs: 8
      },
      right: {
        xs: 4
      }
    },
    one: {
      center: {
        xs: 12
      },
      right: null
    }
  };
  if (props.center && props.two) {
    gridItems.two.center = {
      ...props.center
    };
    gridItems.two.right = {
      ...props.right
    };
  } else if (props.center && props.one) {
    gridItems.one.center = {
      ...props.center
    };
  }
  const position = props.two ? gridItems.two : gridItems.one;
  let gridItem = (
    <Grid item {...position.center} noPadding="true">
      <Grid container>{props.content}</Grid>
    </Grid>
  );
  if (props.two) {
    gridItem = (
      <React.Fragment>
        <Grid item {...position.center} noPadding="true">
          <Grid container>{props.content}</Grid>
        </Grid>
        <Grid item {...position.right} noPadding="true">
          <Grid container>{props.addContent}</Grid>
        </Grid>
      </React.Fragment>
    );
  }
  return <Grid container>{gridItem}</Grid>;
};

export default gridPosition;
