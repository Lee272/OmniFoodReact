import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Navigation from '../Components/navigation';
import MainSection from '../Components/mainsection';


export default function App() {
  return (
    <Router>

      <Navigation />
      <MainSection />



        <Switch>
          <Link>
            <Route path="/about" />
            <Route path="/users" />
            <Route path="/" />
          </Link>
        </Switch>
    </Router>
  );
}
