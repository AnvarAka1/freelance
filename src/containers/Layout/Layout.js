import React, { Component } from "react";
import Topbar from "../../components/Navigation/Topbar/Topbar";
import Grid from "@material-ui/core/Grid";
import Person from "../../components/Person/Person";
import Photo from "../../assets/photo.png";
// Needs to be converted to functional component and use REDUX for handling the state
class Layout extends Component {
  state = {
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
    return (
      <React.Fragment onClick={event => this.searchButtonHandler(event, false)}>
        <Topbar
          drawerOpened={this.state.drawerOpened}
          drawerToggle={this.drawerToggleHandler}
          touched={this.state.touched}
          searchButtonClicked={this.searchButtonHandler}
        />
        <Grid container>
          <Grid item xs={2}>
            <Person image={Photo} />
          </Grid>
          <Grid item xs={10}>
            <main>{this.props.children}</main>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default Layout;
