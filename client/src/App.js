import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./component/register";
import Login from "./component/login";
import NavComponent from "./component/nav";
import Home from "./component/home";
import TicketPage from "./component/ticket/ticketPage";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <NavComponent />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/tickets" exact component={TicketPage} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
