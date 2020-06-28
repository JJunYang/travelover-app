import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./component/register";
import Login from "./component/login";
import NavComponent from "./component/nav";
import Home from "./component/home/home";
import TicketPage from "./component/ticket/ticketPage";
import Flight from "./component/ticket/flight";
import Paypal_Flight from "./component/paypal/paypal_flight";
import Hotel from "./component/ticket/hotel";
import Paypal_Hotel from "./component/paypal/paypal_hotel";
import TravelGuide from "./component/travelGuide/travelGuide";
import TravelGuideDetails from "./component/travelGuide/travelGuideDetail";
import PersonalCenter from "./component/personalCenter/personalCenter";
import Footer from "./component/footer";
import CityMainPage from "./component/city/cityMainPage";
import ExploreMainPage from "./component/explore/exploreMainPage";
import FoodPage from "./component/explore/foodPage";
import SeePage from "./component/explore/seePage";
import StayPage from "./component/explore/stayPage";
import SeeDetails from "./component/details/seeDetails";
import StayDetails from "./component/details/stayDetails";
import FoodDetails from "./component/details/foodDetails";
import CityFoodPage from "./component/city/cityFoodPage";
import CitySeePage from "./component/city/citySeePage";
import CityStayPage from "./component/city/cityStayPage";

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <NavComponent />
        {/* <br /> <br/> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

          <Route path="/explore" exact component={ExploreMainPage} />
          <Route
            path="/explore/city/:cityName&:_id"
            exact
            component={CityMainPage}
          />
          <Route
            path="/explore/city/:cityName&:_id/see-do"
            exact
            component={CitySeePage}
          />
          <Route
            path="/explore/city/:cityName&:_id/food-drink"
            exact
            component={CityFoodPage}
          />
          <Route
            path="/explore/city/:cityName&:_id/stay"
            exact
            component={CityStayPage}
          />

          <Route
            path="/explore/place/food & drink/:_id"
            exact
            component={FoodDetails}
          />
          <Route
            path="/explore/place/see & do/:_id"
            exact
            component={SeeDetails}
          />
          <Route
            path="/explore/place/stay/:_id"
            exact
            component={StayDetails}
          />

          <Route path="/tickets" exact component={TicketPage} />
          <Route path="/tickets/flight" exact component={Flight} />
          <Route path="/tickets/hotel" exact component={Hotel} />
          <Route
            path="/tickets/flight/paypal/:_id"
            exact
            component={Paypal_Flight}
          />
          <Route
            path="/tickets/hotel/paypal/:_id"
            exact
            component={Paypal_Hotel}
          />

          <Route path="/travelGuides" exact component={TravelGuide} />
          <Route
            path="/travelGuides/details/:_id"
            exact
            component={TravelGuideDetails}
          />

          <Route path="/personalcenter" exact component={PersonalCenter} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
