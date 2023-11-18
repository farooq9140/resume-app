// Routes.jsx
import React from "react";
import { Switch, Route } from "react-router-dom";
import AboutMe from "./AboutMe.jsx";
import SimpleDelivery from "./SimpleDelivery.jsx";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={AboutMe} />
      <Route path="/simpledelivery" component={SimpleDelivery} />
    </Switch>
  );
}

export default Routes;
