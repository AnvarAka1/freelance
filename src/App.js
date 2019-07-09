import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
import NewPublication from "./containers/NewPublication/NewPublication";
import MyProjects from "./containers/MyProjects/MyProjects";
import { Route, Switch, withRouter } from "react-router-dom";
import ProjectDescription from "./containers/ProjectDescription/ProjectDescription";
import Freelancers from "./containers/Freelancers/Freelancers";
import Dashboard from "./containers/Dashboard/Dashboard";
import FreelancerInfo from "./containers/FreelancerInfo/FreelancerInfo";
import FreelancerProject from "./containers/FreelancerProject/FreelancerProject";
// import axios from "axios";
class App extends Component {
  jsonCreator() {
    const jsonFile = JSON.stringify(this.state);
    console.log("[App.js]", jsonFile);
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/settings" exact component={UserSettings} />
            <Route path="/projects" exact component={MyProjects} />
            <Route path="/projects/:id" component={ProjectDescription} />
            <Route path="/add" exact component={NewPublication} />
            <Route path="/myprojects" component={MyProjects} />
            <Route path="/freelancers/:id" component={FreelancerInfo} />
            <Route path="/freelancers" exact component={Freelancers} />
            <Route path="/messages" exact component={null} />
            <Route path="/notifications" exact component={null} />
            <Route path="/fl/projects/:id" component={FreelancerProject} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
