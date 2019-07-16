import React from "react";
import ChangeAvatar from "../../ChangeAvatar/ChangeAvatar.js";
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

  return (
    <div
      className={classArray.join(" ")}
      onClick={props.clicked}
      ref={props.fRef}
      style={props.style}
    >
      {image}
      {props.isEditable ? (
        <ChangeAvatar submitHandler={props.submitHandler} />
      ) : null}
    </div>
  );
};

export default personPhoto;
