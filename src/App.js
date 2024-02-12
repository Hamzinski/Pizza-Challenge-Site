import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Order from "./pages/order/Pizza";
import Success from "./pages/order-recieved/SuccessPage";
function App() {
  const [currentOrder, setCurrentOrder] = useState({});
  const orderHandler = (order) => {
    setCurrentOrder(order);
    console.log("order:", order);
  };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/pizza">
            <Order orderHandler={orderHandler} />
          </Route>
          <Route exact path="/success">
            <Success order={currentOrder} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
