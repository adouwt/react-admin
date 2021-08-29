import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './pages/home';
import Statistics from './pages/statistics';
import Users from './pages/users';


const Routers: FC = (props: any) => {
  return (
    <Switch>
        <Route path="/statistics" exact>
            <Statistics />
        </Route>
        <Route path="/users" exact>
            <Users />
        </Route>
        <Route path="/home" exact>
            <Home />
        </Route>
        <Redirect to="/home" from="/"></Redirect>
        <Route path="*">
            <Home />
        </Route>
    </Switch>
  );
}

export default Routers;