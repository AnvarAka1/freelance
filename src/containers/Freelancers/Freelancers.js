import React, { Component } from "react";
// import classes from "./Freelancers.module.css";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
// import Grid from "../../components/Grid/Grid";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import Photo1 from "../../assets/photo.png";
import Photo2 from "../../assets/photo1.png";
import axios from "axios";
// import Button from "../../components/UI/Button/Button";
class Freelancers extends Component {
  state = {
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("fl.json")
      .then(res => {
        const persons = res.data.persons.slice();
        this.setState({
          ...this.state,
          loading: false,
          persons: persons
        });
      })
      .catch(err => {
        console.log(err.data);
      });
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[Freelancers]", jsonFile);
  }
  memberHandler = id => {
    console.log("[Freelancers] memberHandler id =", id);
  };

  render() {
    // this.jsonCreator();
    const content = (
      <React.Fragment>
        <TeamMembers
          memberhandler={this.memberHandler}
          members={this.state.persons}
          info
          showbutton
          loading={this.state.loading}
        />
      </React.Fragment>
    );
    return (
      <GridPosition
        two
        content={content}
        center={{ xs: 10 }}
        right={{ xs: 2 }}
        addContent={null}
      />
    );
  }
}

export default Freelancers;
