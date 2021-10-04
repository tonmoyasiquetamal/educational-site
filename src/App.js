/*<-----App. JS Starting Here----->*/
import './App.css';
import React from "react";

/*<-----React Router Dom----->*/
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuBar from './Components/MenuBar/MenuBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Services from './Components/Services/Services';
import NotFound from './Components/NotFound/NotFound';

/*<-----Router, Switch, Route Got Site Path-----> */
function App() {
  return (
    <div>
      <Router>
        {/* Menubar Called For Site Upside  */}
        <MenuBar></MenuBar>
        <Switch>
          {/* Route Exact Path Needed For Exact Way Route in Site */}
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          {/* Route Path * For If Any other Character Written In After 
          Slash Then Give a Not Found Message */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
/*<-----App. JS Ending Here----->*/