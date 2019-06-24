import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
import classes from "./BreadCrumbs.module.css";
const breadCrumbs = props => {
  console.log(props.crumbs);
  const crumbs = props.crumbs.map(crumb => {
    if (crumb.link) {
      return (
        <Link
          className={classes.Link}
          key={crumb.id}
          color="inherit"
          href={crumb.link}
          onClick={props.handleClick}
        >
          {crumb.name}
        </Link>
      );
    } else {
      return (
        <Typography
          key={crumb.id}
          className={classes.Typography}
          color="textPrimary"
        >
          {crumb.name}
        </Typography>
      );
    }
  });
  return (
    <Breadcrumbs
      className={[classes.BreadCrumbs, classes[props.type]].join(" ")}
    >
      {console.log(classes.BreadCrumbs)}
      {crumbs}
    </Breadcrumbs>
  );
};

export default breadCrumbs;
