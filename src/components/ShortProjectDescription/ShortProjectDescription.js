import React from "react";
import classes from "./ShortProjectDescription.module.css";
import Skills from "../Person/Skills/Skills";
const shortProjectDescription = props => {
  const { price, level, positions, file } = props.info;
  return (
    <div className={classes.ShortProjectDescription}>
      <p>
        Price:<span>{price}</span>
      </p>
      <p>
        Level:<span>{level}</span>
      </p>
      <p>
        Looking for:<span>{positions.join(", ")}</span>
      </p>
      <div className={classes.File}>
        Attached files:
        <Skills skills={file} />
      </div>
    </div>
  );
};

export default shortProjectDescription;
