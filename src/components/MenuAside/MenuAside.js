import React from "react";
import Paper from "../Paper/Paper";
import Heading from "../Heading/Heading";
import Button from "../UI/Button/Button";
const calculatePeopleNumber = peopleNumber => {
  if (peopleNumber > 0) {
    if (peopleNumber > 1) {
      return peopleNumber + " people";
    } else {
      return peopleNumber + " person";
    }
  } else {
    return 0;
  }
};
const menuAside = props => {
  return (
    <Paper noHover autoHeight>
      <Heading small>Menu</Heading>
      <Button
        active={props.active}
        style={{
          marginTop: "10px",
          color: "#777777",
          textAlign: "left",
          paddingLeft: "15px"
        }}
        clicked={props.genClicked}
        type="white"
      >
        General Information
      </Button>
      <Button
        active={!props.active}
        style={{
          marginTop: "10px",
          color: "#777777",
          textAlign: "left",
          paddingLeft: "15px"
        }}
        clicked={props.opClicked}
        type="white"
      >
        Opinions: {calculatePeopleNumber(props.peopleNumber)}
      </Button>
      <Button style={{ marginTop: "10px" }} type="red">
        Report
      </Button>
    </Paper>
  );
};

export default menuAside;
