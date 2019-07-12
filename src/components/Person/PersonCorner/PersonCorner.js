import React from "react";
import PersonPhoto from "../../Person/PersonPhoto/PersonPhoto";
import classes from "./PersonCorner.module.css";
import { NavLink } from "react-router-dom";
const personCorner = props => {
  return (
    <div className={classes.PersonCorner}>
      <ul>
        <li>
          <NavLink className={classes.Link} to="/settings">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.Link} to="/logout">
            Sign Out
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default personCorner;
