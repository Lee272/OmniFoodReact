import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainSection from './Components/MainSection';
import mainsection from './Components/MainSection';

export default function App() {
  return (
      <MainSection />
//     <Router>
//       <React.Fragment>
//         <MainSection />
//         <Switch>
//             <Route path="/MainSection" component={MainSection} />
//         </Switch>
//       </React.Fragment>
//     </Router>
)};