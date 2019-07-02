import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
import NewPublication from "./containers/NewPublication/NewPublication";
import MyProjects from "./containers/MyProjects/MyProjects";
import { Route, Switch, withRouter } from "react-router-dom";
import ProjectDescription from "./containers/ProjectDescription/ProjectDescription";
import Freelancers from "./containers/Freelancers/Freelancers";
class App extends Component {
  state = {
    isUser: true
  };
  render() {
    return (
      <div>
        <Layout isUser={this.state.isUser}>
          <Switch>
            <Route path="/dashboard" component={UserSettings} />
            <Route path="/newpublication" component={NewPublication} />
            <Route path="/myprojects" component={MyProjects} />
            <Route path="/description" component={ProjectDescription} />
          </Switch>
          <UserSettings />
          <NewPublication />
          <MyProjects />
          <ProjectDescription />
          <Freelancers />
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
