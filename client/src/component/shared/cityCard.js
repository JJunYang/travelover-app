import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./shared.css";
import { Link } from "react-router-dom";

// const CityCard = ({ city }) => (
//   <Card className="cardCity">
//     <Link to={`/explore/city/${city.name}&${city._id}`} className="img-block">
//       <Card.Img src={city.representPic} alt="Card image" />
//     </Link>
//     <div className="card-country">{city.country.name}</div>
//     <div className="card-city">
//       <span className="card-city-name">
//         <Link to={`/explore/city/${city.name}&${city._id}`}>{city.name}</Link>
//       </span>
//       <br />
//       <span className="card-city-placeNums">{city.placeNum} places</span>
//     </div>
//   </Card>
// );

// export default CityCard;

export default class CityCard extends Component {
  state = { city: this.props.city };
  render() {
    return (
      <Card className="cardCity">
        <Link
          to={`/explore/city/${this.state.city.name}&${this.state.city._id}`}
          className="img-block"
        >
          <Card.Img src={this.state.city.representPic} alt="Card image" />
        </Link>
        <div className="card-country">{this.state.city.country.name}</div>
        <div className="card-city">
          <span className="card-city-name">
            <Link
              to={`/explore/city/${this.state.city.name}&${this.state.city._id}`}
            >
              {this.state.city.name}
            </Link>
          </span>
          <br />
          <span className="card-city-placeNums">
            {this.state.city.placeNum} places
          </span>
        </div>
      </Card>
    );
  }
}
