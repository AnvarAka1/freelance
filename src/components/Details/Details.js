import React from "react";
import classes from "./Details.module.css";
import Heading from "../Heading/Heading";
import Paper from "../Paper/Paper";
import Button from "../UI/Button/Button";
const details = props => {
  const { number, payment, status } = props.details;
  return (
    <Paper noHover autoHeight>
      <div className={classes.Details}>
        <Heading style={{ fontSize: "18px" }}>Project Details</Heading>
        <p>
          Contact Number: <span style={{ color: "#418AB7" }}>{number}</span>
        </p>
        <p>
          Payment status:
          <span style={{ fontWeight: "bold" }}>
            {payment ? "Paid" : "Not paid"}
          </span>
        </p>
        <div className={classes.StatusButton}>
          <p>
            Status:
            <span style={{ color: "#66CA37" }}>
              {status ? "Active" : "Not active"}
            </span>
          </p>
          <Button
            clicked={() => {
              return null;
            }}
            width="auto"
            height="auto"
            style={{
              color: "#777777",
              fontWeight: "normal"
            }}
            addProject
          >
            Disable
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default details;
