import React from "react";
//import logo from "./logo.svg";
import Login from "./Modules/Sequrity/login";
import Forgotpassword from "./Modules/Sequrity/forgotpassword";
import Register from "./Modules/Sequrity/register";
import Dashboard from "./Modules/Sequrity/dashboard";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <main className="container-wrap">
        <Switch>
          <Route path="/forgotpassword" component={Forgotpassword} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
