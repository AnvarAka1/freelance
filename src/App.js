import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
import NewPublication from "./containers/NewPublication/NewPublication";
import MyProjects from "./containers/MyProjects/MyProjects";
import ProjectDescription from "./containers/ProjectDescription/ProjectDescription";
class App extends Component {
  state = {
    isUser: true
  };
  render() {
    return (
      <div>
        <Layout isUser={this.state.isUser}>
          <UserSettings />
          <NewPublication />
          <MyProjects />
          <ProjectDescription />
        </Layout>
      </div>
    );
  }
}

export default App;
