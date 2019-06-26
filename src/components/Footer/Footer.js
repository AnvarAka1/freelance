import React from "react";
import classes from "./Footer.module.css";

const footer = props => {
  const links = [
    { name: "Terms and Conditions", link: "/", dot: true },
    { name: "Privacy Policy", link: "/", dot: true },
    { name: "Developers", link: "/", dot: false }
  ].map(link => {
    return (
      <span key={link.name}>
        <a href={link.link}>{link.name}</a>
        {link.dot ? <span>•</span> : null}
      </span>
    );
  });
  return <div className={classes.Footer}>{links}</div>;
};
export default footer;
