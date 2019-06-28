import React from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
import NewPublication from "./containers/NewPublication/NewPublication";
import MyProjects from "./containers/MyProjects/MyProjects";
import ProjectDescription from "./containers/ProjectDescription/ProjectDescription";
function App() {
  return (
    <div>
      <Layout>
        <UserSettings />
        <NewPublication />
        <MyProjects />
        <ProjectDescription />
      </Layout>
    </div>
  );
}

export default App;
