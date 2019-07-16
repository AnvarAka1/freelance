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
import Modal from "@material-ui/core/Modal";
import axios from "axios";
// Needs to be converted to functional component and use REDUX for handling the state
class Layout extends Component {
  state = {
    redirect: null,
    touched: false,
    drawerOpened: {
      right: false
    },
    loading: false,
    showMenu: false,
    showModal: false
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({ loading: true });
    axios
      .get("/ly.json")
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

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef = node => {
    this.wrapperRef = node;
  };
  handleClickOutside = event => {
    if (this.state.showMenu) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.profileDropdownHandler();
      }
    }
  };
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[Layout]", jsonFile);
  }
  searchButtonCloseHandler = () => {
    this.setState(prevState => {
      return {
        touched: !prevState.touched
      };
    });
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
  modalCloseHandler;
  clickHandler = path => {
    // this.props.history.push("/settings");
    this.setState({ redirect: path });
  };
  removeRedirect() {
    this.setState({ redirect: null });
  }

  profileDropdownHandler = () => {
    this.setState(prevState => {
      return {
        showMenu: !prevState.showMenu
      };
    });
  };

  modalOpenHandler = () => {
    this.setState({
      showModal: true
    });
  };
  modalCloseHandler = () => {
    this.setState({
      showModal: false
    });
  };
  photoChangeHandler = () => {
    console.log("change");
  };
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

    const viewProfile = this.props.isUserShown
      ? this.state.user
      : this.state.worker;

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
      <div>
        {this.props.isAuthorized ? (
          <React.Fragment>
            <Topbar
              fRef={this.setWrapperRef}
              profileClicked={this.profileDropdownHandler}
              show={this.state.showMenu}
              drawerOpened={this.state.drawerOpened}
              drawerToggle={this.drawerToggleHandler}
              touched={this.state.touched}
              searchButtonClicked={this.searchButtonHandler}
              profile={this.state.user}
              loading={this.state.loading}
            />

            <div className={classes.Padding}>
              <Grid container>
                <Grid item xs={12}>
                  <BreadCrumbs crumbs={crumbs} />
                </Grid>

                <Grid item xs={2}>
                  <Person
                    isEditable
                    photoStyle={{
                      border: "5px #fff solid",
                      padding: "0",
                      margin: "auto"
                    }}
                    editClicked={() => this.clickHandler("/settings")}
                    inviteClicked={() => this.clickHandler("/invite")}
                    contactClicked={() => this.clickHandler("/contact")}
                    profile={viewProfile}
                    loading={this.state.loading}
                    submitHandler={this.photoChangeHandler}
                  />
                </Grid>
                <Grid item xs={10}>
                  {content}
                </Grid>
              </Grid>
            </div>
            <Footer />
            {/* <Modal open={this.state.showModal} onClose={this.modalCloseHandler}>
              <div>something</div>
            </Modal>
            <p onClick={this.modalOpenHandler}>Modal</p> */}
          </React.Fragment>
        ) : (
          content
        )}
      </div>
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
