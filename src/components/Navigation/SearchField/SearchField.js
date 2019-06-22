import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import classes from "./SearchField.module.css";

const searchField = props => {
  const inputWrapperClass = [classes.SearchFieldWrapper];
  if (props.touched) {
    inputWrapperClass.push(classes.SearchFieldWrapperTouched);
  }
  return (
    <div className={classes.SearchField}>
      <div className={inputWrapperClass.join(" ")}>
        <InputBase placeholder="Search" className={classes.Input} />
        <Icon onClick={props.search} className={classes.SearchIcon}>
          search
        </Icon>
      </div>
    </div>
  );
};

export default searchField;
