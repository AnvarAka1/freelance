import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./PersonInfo.module.css";

const personInfo = props => {
  return (
    <div className={classes.PersonInfo}>
      <h3>John Doe</h3>
      <h4>Unitel Ltd. / Manager</h4>
      <p>
        This job entailed communicating with various consumers, giving solid
        information about company
      </p>
      <Button>Button</Button>
    </div>
  );
};

export default personInfo;
