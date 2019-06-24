import React from "react";
import Layout from "./containers/Layout/Layout";
import UserSettings from "./containers/UserSettings/UserSettings";
function App() {
  return (
    <div>
      <Layout>
        <UserSettings />
      </Layout>
    </div>
  );
}

export default App;
