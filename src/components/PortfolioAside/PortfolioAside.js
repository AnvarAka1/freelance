import React from "react";
import Paper from "../Paper/Paper";
import Heading from "../Heading/Heading";
import { NavLink } from "react-router-dom";
// import Button from "../UI/Button/Button";
import classes from "./PortfolioAside.module.css";
const portfolioAside = props => {
  const portfolios = props.portfolios.map(portfolio => {
    return (
      <div key={portfolio.id} className={classes.Portfolio}>
        <NavLink to={`/fl/projects/${portfolio.id}`}>
          <p className={classes.Link}>{portfolio.name}</p>
        </NavLink>
      </div>
    );
  });
  return (
    <Paper noHover autoHeight>
      <Heading small>Portfolio</Heading>
      {portfolios}
    </Paper>
  );
};

export default portfolioAside;
