import React from "react";
import classes from "./Heading.module.css";

const heading = props => {
  const head = props.date ? (
    <React.Fragment>
      <h1>{props.children}</h1>
      <p className={classes.Date}>{props.date}</p>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h1>{props.children}</h1>
      {props.isProject ? <p>project</p> : null}
      {props.link ? <a href="/">{props.link}</a> : null}
    </React.Fragment>
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
