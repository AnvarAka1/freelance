import React from "react";
import classes from "./Heading.module.css";

const heading = props => {
  const head = props.date ? (
    <div>
      <h1 style={props.style}>{props.children}</h1>
      <p className={classes.Date}>{props.date}</p>
    </div>
  ) : (
    <div>
      <h1 style={props.style}> {props.children}</h1>
      {props.isProject ? <p>project</p> : null}
      {props.link ? <a href="/">{props.link}</a> : null}
    </div>
  );
  const classHeading = [classes.Heading];
  if (props.big) {
    classHeading.push(classes.HeadingMaxMargin);
  }
  if (props.date) {
    classHeading.push(classes.DateHeading);
  }

  return <div className={classHeading.join(" ")}>{head}</div>;
};

export default heading;
