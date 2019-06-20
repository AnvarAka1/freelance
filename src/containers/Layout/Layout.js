import React from "react";
import Topbar from "../../components/Navigation/Topbar/Topbar";
const layout = props => {
  return (
    <React.Fragment>
      <Topbar />
      <main>{props.children}</main>
    </React.Fragment>
  );
};
export default layout;
