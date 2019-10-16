import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './Components/MainSection';
import FoodDelivery from './Components/FoodDelivery';

export default function App() {
  return (
    <React.Fragment>
      <MainSection />
      <FoodDelivery />
    </React.Fragment>
//     <Router>
//       <React.Fragment>
//         <MainSection />
//         <Switch>
//             <Route path="/MainSection" component={MainSection} />
//         </Switch>
//       </React.Fragment>
//     </Router>
)};