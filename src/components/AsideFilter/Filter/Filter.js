import React from "react";
// import classes from "./Filter.module.css";
import Skills from "../../Person/Skills/Skills";

const filter = props => {
  return <Skills skills={props.filter} isClickable clicked={props.clicked} />;
};

export default filter;
