import React from 'react';
import '../style.css';
import Image from 'react-bootstrap/Image';
import { Row, Col, Container, Card } from 'react-bootstrap';
import one from '../img/1.jpg';
import two from '../img/2.jpg';
import three from '../img/3.jpg';
import four from '../img/4.jpg';
import five from '../img/5.jpg';
import six from '../img/6.jpg';
import seven from '../img/7.jpg';
import eight from '../img/8.jpg';


export default function FoodGallery(){
  return(
    <section className="">

      <Container fluid={true}>
        <Row>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={one} className="Image" />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={two} />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={three} />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={four} />
              </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={five} className="Image" />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={six} />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={seven} />
              </Card>
          </Col>
          <Col className="col-sm-3 p-0 overflow-hidden">
              <Card className="gallery">
                <Image src={eight} />
              </Card>
          </Col>
        </Row>

      </Container>
    </section>
  )
}