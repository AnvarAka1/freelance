import React from "react";
import Heading from "../Heading/Heading";
import Filter from "./Filter/Filter";
import Icon from "@material-ui/core/Icon";
const asideFilter = props => {
  return (
    <div>
      <Heading
        style={{
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        Filter
        <Icon
          style={{
            fontSize: "14px",
            marginLeft: "5px",
            display: "inline-block",
            paddingBottom: "5px"
          }}
        >
          tune
        </Icon>
      </Heading>
      <Filter filter={props.filter} clicked={props.filterHandler} />
    </div>
  );
};

export default asideFilter;
