import React from "react";
import classes from "./ChangeAvatar.module.css";
import Icon from "@material-ui/core/Icon";
const changeAvatar = props => {
  return (
    <div className={classes.ChangeAvatar}>
      <span>Change avatar</span>
      <form onSubmit={props.submitHandler}>
        <input type="file" />
      </form>
      <Icon>linked_camera</Icon>
    </div>
  );
};

export default changeAvatar;
