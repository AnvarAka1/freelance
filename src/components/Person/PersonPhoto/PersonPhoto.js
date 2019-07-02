import React from "react";
import classes from "./PersonPhoto.module.css";
const personPhoto = props => {
  const classArray = [classes.PersonPhoto];
  if (props.info) {
    classArray.push(classes.Info);
  } else if (props.circle) {
    classArray.push(classes.CirclePhoto);
  }

  return (
    <div className={classArray.join(" ")}>
      <img src={props.image} alt={props.alt} />
    </div>
  );
};

export default personPhoto;
