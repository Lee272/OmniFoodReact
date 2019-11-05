import React from 'react';
import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './Components/MainSection';
import FoodDelivery from './Components/FoodDelivery';
import FoodGallery from './Components/FoodGallery';
import TailWindCSS from './Components/TailWindCSS';
import Cities from './Components/Cities';
import Testimonials from './Components/Testimonials';
import OrderMenu from './Components/OrderMenu';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';
import AllGallery from './Components/AllGallery';

export default function App() {
  return (
  <React.Fragment>
    <React.Fragment>
      <MainSection />
      <FoodDelivery />
      <FoodGallery />
      <TailWindCSS />
      <Cities Cities={["Lisbon", "Berlin", "London", "San Francisco"]} />
      <Testimonials />
      <OrderMenu />
      <ContactForm />
      <Footer />
      <AllGallery />
    </React.Fragment>
{/*     <Router>
      <React.Fragment>
        <Switch>
            <Route exact path="/" component={MainSection} />
        </Switch>
      </React.Fragment>
    </Router> */}
</React.Fragment>
)};