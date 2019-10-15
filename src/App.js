import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './Components/MainSection';
import mainsection from './Components/MainSection';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <MainSection />
        <Switch>
            <Route path="/mainsection" component={mainsection} />
            <Route path="/" />
            <Route path="/" />
        </Switch>
      </React.Fragment>
    </Router>
)};