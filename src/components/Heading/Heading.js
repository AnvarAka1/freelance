import React from "react";
import classes from "./Heading.module.css";
import Icon from "@material-ui/core/Icon";
const heading = props => {
  const headerClasses = props.hType ? [classes[props.hType]] : [];
  if (props.small) {
    headerClasses.push(classes.Small);
  }
  const addHeading = props.addHeading ? (
    <p style={{ display: "inline" }}>{props.addHeading}</p>
  ) : null;
  const subHeading = props.subHeading ? (
    <p className={classes.SubHeading}>
      {props.subHeading.name} | ${props.subHeading.price} |{" "}
      {props.subHeading.level}
    </p>
  ) : null;

  const head = props.date ? (
    <React.Fragment>
      <h1 style={props.style} className={headerClasses.join(" ")}>
        {props.children}
        {subHeading}
      </h1>
      {addHeading}
      {props.viewed ? (
        <p className={[classes.Date, classes.Gray].join(" ")}>
          {props.isActiveState ? (
            <span style={{ color: "#66CA37", fontWeight: "bold" }}>Active</span>
          ) : (
            <span style={{ fontWeight: "bold" }}>Expired</span>
          )}
          <span>
            <Icon>access_time</Icon>
            {props.date}
          </span>
          <span>
            <Icon>visibility</Icon>
            {props.viewed}
          </span>
        </p>
      ) : (
        <p className={classes.Date}>{props.date}</p>
      )}
    </React.Fragment>
  ) : (
    <div>
      <h1 style={props.style} className={headerClasses.join(" ")}>
        {props.children}
      </h1>
      {addHeading}
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
