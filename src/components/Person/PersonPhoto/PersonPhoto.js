import React from "react";
import classes from "./PersonPhoto.module.css";
const personPhoto = props => {
  const classArray = [classes.PersonPhoto];

  let image = props.profile ? (
    <img src={props.profile.photo} alt={props.profile.name} />
  ) : (
    <div className={classes.Loading} />
  );
  if (props.info) {
    classArray.push(classes.Info);
  } else if (props.circle && !props.profile) {
    classArray.push(classes.CirclePhoto);
    image = <div className={classes.LoadingCircle} />;
  } else if (props.circle && props.profile) {
    classArray.push(classes.CirclePhoto);
    image = <img src={props.profile.photo} alt={props.profile.name} />;
  }

  return <div className={classArray.join(" ")}>{image}</div>;
};

export default personPhoto;
