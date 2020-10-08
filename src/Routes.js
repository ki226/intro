import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter basename="intro">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
