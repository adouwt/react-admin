import React, { FC } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';

import BasicLayout from './layout/BasicLayout';
import NoMenuLayout from './layout/NoMenuLayout';

const noMenuRoute = [
  '/users', '/login', '/register'
]

const App = (props: any) => {
  return (
    <div className="App">
      <Router>
        {noMenuRoute.indexOf(window.location.pathname) > -1 ?
          <NoMenuLayout/> : <BasicLayout/>
        }
      </Router>
    </div>
  );
}

export default App;