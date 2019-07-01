import React, { Component } from "react";
import Topbar from "../../components/Navigation/Topbar/Topbar";
import Grid from "../../components/Grid/Grid";
import Person from "../../components/Person/Person";
import Photo from "../../assets/photo.png";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";
import Photo1 from "../../assets/photo1.png";
// import { Switch, Router } from "react-router-dom";
// Needs to be converted to functional component and use REDUX for handling the state
class Layout extends Component {
  state = {
    user: {
      photo: Photo,
      name: "John Doe",
      position: "Unitel Ltd. / Manager",
      description:
        "This job entailed communicating with various consumers, giving solid information about company",
      isUser: true
    },
    worker: {
      photo: Photo1,
      name: "Miyah Miles",
      position: "Front-end developer",
      rating: "4.5/5.0",
      description:
        "I worked at the PCAD convention downtown Toronto for two consecutive years representing CanAlaska...",
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
      isUser: false
    },
    touched: false,
    drawerOpened: {
      right: false
    }
  };
  searchButtonHandler = (event, status) => {
    if (status != null) {
      this.setState({ touched: status });
    } else {
      this.setState(prevState => {
        return {
          touched: !prevState.touched
        };
      });
    }
    if (status == null && this.state.touched) {
      alert("SEARCH!");
    }
  };

  drawerToggleHandler = () => {
    this.setState(prevState => {
      return {
        ...this.state.drawerOpened,
        drawerOpened: {
          right: !prevState.drawerOpened.right
        }
      };
    });
  };
  render() {
    const crumbs = [
      {
        id: 1,
        link: "/",
        name: "Dashboard"
      },
      {
        id: 2,
        link: "/hello",
        name: "Core"
      },
      {
        id: 3,
        link: null,
        name: "Path"
      }
    ];

    const viewProfile = this.props.isUser ? this.state.user : this.state.worker;
    return (
      <React.Fragment>
        <Topbar
          drawerOpened={this.state.drawerOpened}
          drawerToggle={this.drawerToggleHandler}
          touched={this.state.touched}
          searchButtonClicked={this.searchButtonHandler}
          profilePhoto={this.state.user.photo}
          alt={this.state.user.name}
        />
        {/*  
          redux state => all can see public(global)
          redux state isUser=true
          // newState === oldState ? null : axios(get, ).then()
          redux state isUser=false

          userName: Anvar
          Photo: src
        */}
        <div className={classes.Padding}>
          <Grid container>
            <Grid item xs={12}>
              <BreadCrumbs crumbs={crumbs} />
            </Grid>
            <Grid item xs={2}>
              <Person profile={viewProfile} />
            </Grid>
            <Grid item xs={10}>
              <main onClick={event => this.searchButtonHandler(event, false)}>
                {this.props.children}
              </main>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Layout;
