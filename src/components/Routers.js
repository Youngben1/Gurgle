import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Results from "./Results";

const Routers = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/images", "/news", "/search", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};

export default Routers;
