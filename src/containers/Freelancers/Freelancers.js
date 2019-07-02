import React, { Component } from "react";
import classes from "./Freelancers.module.css";
import GridPosition from "../../components/Grid/GridPosition/GridPosition";
import Grid from "../../components/Grid/Grid";
import TeamMembers from "../../components/TeamMembers/TeamMembers";
import Photo1 from "../../assets/photo.png";
import Photo2 from "../../assets/photo1.png";
import Button from "../../components/UI/Button/Button";
class Freelancers extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Miyah Miles",
        rating: "4.5/5.0",
        photo: Photo1,
        position: "Front-end developer",
        description:
          "I worked at the PCAD convention downtown Toronto for two consecutive years representing CanAlaska. This job entailed communicating with various investors and consumers, giving solid information about CanAlaska...",
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
        ]
      },
      {
        id: 2,
        name: "Andreas Brixen",
        rating: "4.1/5.0",
        photo: Photo2,
        position: "Back-end developer",
        description:
          "I have over 10 years of experience in the IT field, with specialization in digital communication, business administration and marketing.",
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
        ]
      }
    ]
  };
  render() {
    const content = (
      <React.Fragment>
        <TeamMembers members={this.state.persons} info showbutton />
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
