import React from "react";
import { Route, Switch } from "react-router-dom";

import Create from "./components/Create/Create";
import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/create/" component={Create} />
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />
    <Route exact path="/signup/" component={Signup} />
  </Switch>
);

export default BaseRouter;
