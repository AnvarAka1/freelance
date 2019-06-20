import React from "react";
import Logo from "../../../assets/Logo.png";
import classes from "./Logo.module.css";
const logo = props => {
  const classArray = [classes.Logo];
  if (props.classElement) {
    classArray.push(props.classElement);
  }
  return (
    <div className={classArray.join(" ")}>
      <img
        src={Logo}
        alt="Logo"
        style={{
          width: "100%",
          height: "auto"
        }}
      />
    </div>
  );
};
export default logo;
