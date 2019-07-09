import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import React, { Component } from "react";
class ChangeUser extends Component {
  render() {
    console.log("Function: ", this.props.isUserShown);
    return null;
  }
}
const mapStateToProps = state => {
  return {
    isUserShown: state.user.isUserShown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserChange: () => dispatch(actions.userChanged)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeUser);
