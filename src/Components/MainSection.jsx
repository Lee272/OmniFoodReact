import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "../style.css";
export default class mainsection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Router>
          <Jumbotron fluid={true} className="bg background" id="StartPoint">
            <Container className="d-flex h-100 align-items-center">
              <Row className="align-middle">
                <Col md={{ span: 12, offset: 1 }}>
                  <div className="focus-in-expand">
                    <h1>Goodbye Junk Food</h1>
                    <h1>Hello Super Healthy Meals</h1>
                  </div>
                  <p>
                    <Button className="btn rounded-pill">I'm Hungry</Button>
                    <Button className="btn-ghost rounded-pill">
                      <Link to="/a" className="text-white hover:no-underline">
                        Show me More
                      </Link>
                    </Button>
                    <Switch>
                      <Route path="/a"></Route>
                    </Switch>
                  </p>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Router>
      </React.Fragment>
    );
  }
}
