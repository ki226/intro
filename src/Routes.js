import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter basename="intro">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
