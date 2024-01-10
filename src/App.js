import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Order from "./pages/order/Pizza";
import Success from "./pages/order-recieved/SuccessPage";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/pizza">
            <Order />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
