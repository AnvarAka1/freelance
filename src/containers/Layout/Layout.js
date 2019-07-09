import React, { Component } from "react";
import Topbar from "../../components/Navigation/Topbar/Topbar";
import Grid from "../../components/Grid/Grid";
import Person from "../../components/Person/Person";
// import Photo from "../../assets/photo.png";
import BreadCrumbs from "../../components/UI/BreadCrumbs/BreadCrumbs";
import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.css";
// import Spinner from "../../components/UI/Spinner/Spinner";
// import Photo1 from "../../assets/photo1.png";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
// Needs to be converted to functional component and use REDUX for handling the state
class Layout extends Component {
  state = {
    redirect: null,
    touched: false,
    drawerOpened: {
      right: false
    },
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("ly.json")
      .then(res => {
        this.setState({
          ...this.state,
          ...res.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[Layout]", jsonFile);
  }
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

  clickHandler = path => {
    // this.props.history.push("/settings");
    this.setState({ redirect: path });
  };
  removeRedirect() {
    this.setState({ redirect: null });
  }
  render() {
    // this.jsonCreator();
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

    const viewProfile = this.props.isUserShown ? this.state.user : this.state.worker;

    let content = (
      <main onClick={event => this.searchButtonHandler(event, false)}>
        {this.props.children}
      </main>
    );
    if (this.state.redirect) {
      content = <Redirect to={this.state.redirect} />;
      this.removeRedirect();
    }
    return (
      <React.Fragment>
        <Topbar
          drawerOpened={this.state.drawerOpened}
          drawerToggle={this.drawerToggleHandler}
          touched={this.state.touched}
          searchButtonClicked={this.searchButtonHandler}
          profile={this.state.user}
          loading={this.state.loading}
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
              <Person
                editClicked={() => this.clickHandler("/settings")}
                inviteClicked={() => this.clickHandler("/invite")}
                contactClicked={() => this.clickHandler("/contact")}
                profile={viewProfile}
                loading={this.state.loading}
              />
            </Grid>
            <Grid item xs={10}>
              {content}
            </Grid>
          </Grid>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isUserShown: state.user.isUserShown
  };
};
// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }
export default connect(mapStateToProps)(Layout);
