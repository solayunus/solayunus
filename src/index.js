import React from 'react';
import ReactDOM from 'react-dom';

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.2.0";
import "./assets/demo/demo.css";

import ProfilePage from "./pages/ProfilePage.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route
        path="/"
        render={(props) => <ProfilePage {...props} />}
      />

      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
