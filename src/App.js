import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Homepage from "./pages/home/Homepage";
import Order from "./pages/order/Orderpage";
import Recieve from "./pages/order-recieved/Recievepage";
function App() {
  return (
    <>
      <Router>
      <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/order">
            <Order />
          </Route>
          <Route exact path="/recieve">
            <Recieve />
          </Route>
        </Switch>
      </Router>
       
    </>
  );
};
export default App;
