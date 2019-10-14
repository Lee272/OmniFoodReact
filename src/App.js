import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/navigation';
import MainSection from './Components/mainsection';
import mainsection from './Components/mainsection';


export default function App() {


  return (
    <Router>
      <React.Fragment>
        <Navigation />
        <MainSection />


        <Switch>
            <Route path="/mainsection" component={mainsection} />
            <Route path="/" />
            <Route path="/" />
        </Switch>
      </React.Fragment>
    </Router>
  
)};