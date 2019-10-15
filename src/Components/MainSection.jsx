import React from 'react';
import Navigation from './Navigation'
import { Jumbotron, Button, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import '../style.css'

export default class mainsection extends React.Component {
  render(){
    return (
      <React.Fragment>
      <Navigation />
        <Jumbotron fluid className="background">
          <Container>
          <Row className="align-middle">
            <Col md={{ span: 6, offset: 1 }}>
              <h1>Goodbye Junk Food</h1>
              <h1>Hello Super Healthy Meals</h1>
              <p>
                <Button className="btn rounded-pill">I'm Hungry</Button>
                <Button className="btn-ghost rounded-pill">Show me More</Button>
              </p>
            </Col>
          </Row>
          </Container>
        </Jumbotron>
      </React.Fragment>
    )
  }
}