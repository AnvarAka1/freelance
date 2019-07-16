import React, { Component } from "react";
// import classes from "./Freelancers.module.css";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
// import Grid from "../../components/Grid/Grid";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
// import Photo1 from "../../assets/photo.png";
// import Photo2 from "../../assets/photo1.png";
import Filter from "../../components/AsideFilter/Filter/Filter";
import axios from "axios";
import * as actions from "../../store/actions/index";
import Heading from "../../components/Heading/Heading";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import AsideFilter from "../../components/AsideFilter/AsideFilter";
// import Button from "../../components/UI/Button/Button";
class Freelancers extends Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Web-development"
      },
      {
        id: 2,
        name: "Front-end"
      },
      {
        id: 3,
        name: "Back-end"
      },
      {
        id: 4,
        name: "Design"
      },
      {
        id: 5,
        name: "UI/UX"
      },
      {
        id: 6,
        name: "Mobile Applications"
      },
      {
        id: 7,
        name: "iOS"
      }
    ],
    loading: false,
    isUserShown: true,
    shouldChange: false
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

    if (this.state.shouldChange) {
      // axios.get(user)
      this.setState({ shouldChange: false });
    }
  }

  user() {
    console.log("isUserShown = ", this.props.isUserShown);

    if (this.state.isUserShown !== this.props.isUserShown) {
      this.props.onUserChanged();
      this.setState({ shouldChange: true });
    }
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[Freelancers]", jsonFile);
  }
  memberHandler = id => {
    this.props.history.push(`/freelancers/${id}`);
  };

  filterHandler = id => {
    let skills = this.state.skills.slice();
    let indexFound;
    skills.find((element, index) => {
      indexFound = index;
      return id === element.id;
    });
    skills[indexFound].isSelected = !skills[indexFound].isSelected;
    this.setState({ skills: skills });
  };
  render() {
    this.user();
    // this.jsonCreator();
    const content = (
      <React.Fragment>
        <TeamMembers
          isSeparated
          clicked={this.memberHandler}
          members={this.state.persons}
          info
          showbutton
          loading={this.state.loading}
        />
      </React.Fragment>
    );
    const addContent = (
      <React.Fragment>
        <AsideFilter
          filter={this.state.skills}
          filterHandler={this.filterHandler}
        />
      </React.Fragment>
    );
    return (
      <GridPosition
        two
        content={content}
        center={{ xs: 10 }}
        right={{ xs: 2 }}
        addContent={addContent}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserShown: state.user.isUserShown
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUserChanged: () => dispatch(actions.userChanged())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Freelancers);
