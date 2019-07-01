import React from "react";
import classes from "./ControlButtons.module.css";

import ControlButton from "./ControlButton/ControlButton";
const controlButtons = props => {
  const controlButtonsList = props.buttons.map(button => {
    return (
      <ControlButton
        key={button.content}
        clicked={button.clicked}
        // style={button.style}
      >
        {button.content}
      </ControlButton>
    );
  });
  return <div className={classes.ControlButtons}>{controlButtonsList}</div>;
};

export default controlButtons;
