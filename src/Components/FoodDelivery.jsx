import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { iosInfiniteOutline } from "react-icons-kit/ionicons/iosInfiniteOutline";
import { iosStopwatchOutline } from "react-icons-kit/ionicons/iosStopwatchOutline";
import { iosNutritionOutline } from "react-icons-kit/ionicons/iosNutritionOutline";
import { iosCartOutline } from "react-icons-kit/ionicons/iosCartOutline";

export default class FoodDelivery extends React.Component {
  render() {
    return (
      <section className="text-center FoodDelivery" id="FoodDelivery">
        <Row className="">
          <Col className="">
            <h1 className="mt-6 P-underline">Get Food Fast — Not Fast Food</h1>
            <p className="my-2 px-8 py-4 text-justify xl:w-2/3 xl:mx-auto">
              Hello, we're Omnifood, your new premium food delivery service. We
              know you're always busy. No time for cooking. So let us take care
              of that, we're really good at it, we promise!
            </p>
          </Col>
        </Row>
        <ScrollAnimation delay={500} animateIn="fadeIn" animateOut="fadeOut">
          <div className="mx-2 px-6 text-left w-full md:flex">
            <Card className="flex p-2">
              <div style={{ color: "#e67e22" }}>
                {" "}
                <Icon size={64} icon={iosInfiniteOutline} />{" "}
              </div>
              <Card.Body className="p-1 mb-3">
                <Card.Title>UP TO 365 DAYS/YEAR</Card.Title>
                <Card.Text className="text-sm md:pr-2 md:text-left">
                  Never cook again! We really mean that. Our subscription plans
                  include up to 365 days/year coverage. You can also choose to
                  order more flexibly if that's your style.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="flex p-2">
              <div style={{ color: "#e67e22" }}>
                {" "}
                <Icon size={64} icon={iosStopwatchOutline} />{" "}
              </div>
              <Card.Body className="p-1 mb-3">
                <Card.Title>READY IN 20 MINUTES</Card.Title>
                <Card.Text className="text-sm">
                  You're only twenty minutes away from your delicious and super
                  healthy meals delivered right to your home. We work with the
                  best chefs in each town to ensure that you're 100% happy.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="flex p-2">
              <div style={{ color: "#e67e22" }}>
                {" "}
                <Icon size={64} icon={iosNutritionOutline} />{" "}
              </div>
              <Card.Body className="p-1 mb-3">
                <Card.Title className="md:pb-6 lg:pb-0">
                  100% ORGANIC
                </Card.Title>
                <Card.Text className="text-sm">
                  All our vegetables are fresh, organic and local. Animals are
                  raised without added hormones or antibiotics. Good for your
                  health, the environment, and it also tastes better!
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="flex p-2">
              <div style={{ color: "#e67e22" }}>
                {" "}
                <Icon size={64} icon={iosCartOutline} />{" "}
              </div>
              <Card.Body className="p-1 mb-3">
                <Card.Title>ORDER ANYTHING</Card.Title>
                <Card.Text className="text-sm">
                  We don't limit your creativity, which means you can order
                  whatever you feel like. You can also choose from our menu
                  containing over 100 delicious meals. It's up to you!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </ScrollAnimation>
      </section>
    );
  }
}
