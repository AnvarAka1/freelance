import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
import NewPublication from "./containers/NewPublication/NewPublication";
import MyProjects from "./containers/MyProjects/MyProjects";
import { Route, Switch, withRouter } from "react-router-dom";
import ProjectDescription from "./containers/ProjectDescription/ProjectDescription";
import Freelancers from "./containers/Freelancers/Freelancers";
import Dashboard from "./containers/Dashboard/Dashboard";
class App extends Component {
  state = {
    isUser: true
  };
  componentWillMount() {}
  render() {
    return (
      <div>
        <Layout isUser={this.state.isUser}>
          <Switch>
            <Route path="/settings" component={UserSettings} />
            <Route path="/projects" exact component={MyProjects} />
            <Route path="/projects/:id" component={ProjectDescription} />
            <Route path="/add" component={NewPublication} />
            <Route path="/myprojects" component={MyProjects} />
            <Route path="/freelancers" component={Freelancers} />
            <Route path="/messages" component={null} />
            <Route path="/notifications" component={null} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
