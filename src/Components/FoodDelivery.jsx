import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { Container, Row, Col } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import {iosInfiniteOutline} from 'react-icons-kit/ionicons/iosInfiniteOutline';
import {iosStopwatchOutline} from 'react-icons-kit/ionicons/iosStopwatchOutline';
import {iosNutritionOutline} from 'react-icons-kit/ionicons/iosNutritionOutline';
import {iosCartOutline} from 'react-icons-kit/ionicons/iosCartOutline';

export default class FoodDelivery extends React.Component{
  render(){
    return(
      <Container className="text-center FoodDelivery" id="NextStop">
        <Row className="px-5 m-5">
          <Col className="px-5 mx-5">
            <h1 className="P-underline">Get Food Fast — Not Fast Food</h1>
            <p className="text-left">
              Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. No time for cooking. So let us take care of that, we're really good at it, we promise!
            </p>
          </Col>
        </Row>
        <CardDeck className="text-left">
          <Card>
          <div style={{ color: '#e67e22' }}> <Icon size={64} icon={iosInfiniteOutline} /> </div>
            <Card.Body>
              <Card.Title>UP TO 365 DAYS/YEAR</Card.Title>
              <Card.Text>
              Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage.
              You can also choose to order more flexibly if that's your style.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <div style={{ color: '#e67e22' }}> <Icon size={64} icon={iosStopwatchOutline} /> </div>
            <Card.Body>
              <Card.Title>READY IN 20 MINUTES</Card.Title>
              <Card.Text>
              You're only twenty minutes away from your delicious and super healthy meals delivered right to your home.
              We work with the best chefs in each town to ensure that you're 100% happy.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
          <div style={{ color: '#e67e22' }}> <Icon size={64} icon={iosNutritionOutline} /> </div>
           <Card.Body>
              <Card.Title>100% ORGANIC</Card.Title>
              <Card.Text>
                All our vegetables are fresh, organic and local.
                Animals are raised without added hormones or antibiotics.
                Good for your health, the environment, and it also tastes better!
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
          <div style={{ color: '#e67e22' }}> <Icon size={64} icon={iosCartOutline} /> </div>
            <Card.Body>
              <Card.Title>ORDER ANYTHING</Card.Title>
              <Card.Text>
              We don't limit your creativity, which means you can order whatever you feel like.
              You can also choose from our menu containing over 100 delicious meals. It's up to you!
              </Card.Text>
            </Card.Body>
          </Card>

        </CardDeck>
      </Container>
    )
  }
}