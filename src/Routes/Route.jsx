import React from "react";
import { Switch, Route } from "react-router-dom";

//Local components
import About from "./../Components/About";
import Lazy from "./../Components/Lazy";

let routeList = [
  {
    path: "/about",
    exact: true,
    component: () => <About />,
  },

  {
    path: "/lazy",
    exact: true,
    component: () => <Lazy />,
  },
];

export default function Routes() {
  return (
    <Switch>
      {routeList.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
