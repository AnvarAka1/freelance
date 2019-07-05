import React from "react";
import classes from "./PersonPhoto.module.css";
import Spinner from "../../UI/Spinner/Spinner";
const personPhoto = props => {
  const classArray = [classes.PersonPhoto];

  if (props.info) {
    classArray.push(classes.Info);
  } else if (props.circle) {
    classArray.push(classes.CirclePhoto);
  }
  const image = props.loading ? (
    <Spinner />
  ) : (
    <img src={props.image} alt={props.alt} />
  );
  console.log(props.loading);
  return <div className={classArray.join(" ")}>{image}</div>;
};

export default personPhoto;
