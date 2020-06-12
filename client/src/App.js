import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./component/register";
import Login from "./component/login";
import NavComponent from "./component/nav";
import Home from "./component/home";
import TicketPage from "./component/ticket/ticketPage";
import Flight from "./component/ticket/flight";
import Paypal_Flight from "./component/paypal/paypal_flight";
import Bus from "./component/ticket/bus";
import Paypal_Bus from "./component/paypal/paypal_bus";
import Hotel from "./component/ticket/hotel";
import Paypal_Hotel from "./component/paypal/paypal_hotel";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <NavComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/tickets" exact component={TicketPage} />
          <Route path="/tickets/flight" exact component={Flight} />
          <Route path="/tickets/bus" exact component={Bus} />
          <Route path="/tickets/hotel" exact component={Hotel} />
          <Route
            path="/tickets/flight/paypal/:_id"
            exact
            component={Paypal_Flight}
          />
          <Route path="/tickets/bus/paypal/:_id" exact component={Paypal_Bus} />
          <Route
            path="/tickets/hotel/paypal/:_id"
            exact
            component={Paypal_Hotel}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
