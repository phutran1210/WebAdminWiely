import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "util/asyncComponent";

const Dashboard = ({ match }) => (
  <Switch>
    <Redirect exact from={`${match.url}/`} to={`${match.url}/manage`} />
    <Route
      path={`${match.url}/manage`}
      component={asyncComponent(() => import("./Manage/index"))}
    />
    <Route
      path={`${match.url}/info`}
      component={asyncComponent(() => import("./Info/index"))}
    />
  </Switch>
);

export default Dashboard;
