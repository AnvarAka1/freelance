import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import classes from "./SearchField.module.css";
const searchField = props => {
  return (
    <div className={classes.SearchField}>
      <div className={classes.SearchFieldWrapper}>
        <InputBase placeholder="Search" className={classes.Input} />
        <Icon
          onClick={() => {
            alert("Search");
          }}
          className={classes.SearchIcon}
        >
          search
        </Icon>
      </div>
    </div>
  );
};
export default searchField;
