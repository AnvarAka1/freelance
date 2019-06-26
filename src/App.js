import React from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
import NewPublication from "./containers/NewPublication/NewPublication";
function App() {
  return (
    <div>
      <Layout>
        <UserSettings />
        <NewPublication />
      </Layout>
    </div>
  );
}

export default App;
