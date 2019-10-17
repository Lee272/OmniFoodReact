import React from 'react';
import '../style.css';
import Image from 'react-bootstrap/Image';
import { Row, Col, Container, Card } from 'react-bootstrap';
import one from '../img/1.jpg';
import two from '../img/2.jpg';
import three from '../img/3.jpg';
import four from '../img/4.jpg';


export default function FoodGallery(){
  return(
    <section className="FGSection">

      <Container fluid={true}>
        <Row>
          <Col className="col-sm-3 p-0">
              <Card>
                <Image src={one} className="Image" />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0">
              <Card>
                <Image src={two} />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0">
              <Card>
                <Image src={three} />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0">
              <Card>
                <Image src={four} />
              </Card>
          </Col>
        </Row>

      </Container>
    </section>
  )
}