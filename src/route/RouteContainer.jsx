import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { routes } from "./route";

export const RouteContainer = () => {
  return (
    <Switch>
      {routes.map(r => {
        return (
          <Route path={r.path} exact={r.exact}>
            {r.component}
          </Route>
        )
      })}
    </Switch>
  )
}