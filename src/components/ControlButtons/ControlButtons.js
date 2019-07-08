import React from "react";
import classes from "./ControlButtons.module.css";

import ControlButton from "./ControlButton/ControlButton";
const controlButtons = props => {
  const controlButtonsList = props.buttons.map(button => {
    return (
      <React.Fragment key={button.content}>
        <ControlButton clicked={button.clicked} styleAttr={button.style}>
          {button.content}
        </ControlButton>
        {button.hasLine ? <span className={classes.VLine}>|</span> : null}
      </React.Fragment>
    );
  });
  return <div className={classes.ControlButtons}>{controlButtonsList}</div>;
};

export default controlButtons;
