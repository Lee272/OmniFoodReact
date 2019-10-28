import React from 'react';
import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './Components/MainSection';
import FoodDelivery from './Components/FoodDelivery';
import FoodGallery from './Components/FoodGallery';
import TailWindCSS from './Components/TailWindCSS';
import Cities from './Components/Cities';

export default function App() {
  return (
    <React.Fragment>
      {/* <MainSection />
      <FoodDelivery />
      <FoodGallery />
      <TailWindCSS /> */}
      <Cities />
    </React.Fragment>
//     <Router>
//       <React.Fragment>
//         <Switch>
//             <Route exact path="/" component={MainSection} />
//         </Switch>
//       </React.Fragment>
//     </Router>
)};