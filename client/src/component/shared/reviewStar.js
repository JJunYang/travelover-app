import React from "react";
import "./shared.css";

const ReviewStar = ({ percentage }) => (
  <span className="star-rating">
    <div className="star-rating-top" style={{ width: `${percentage}%` }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="star-rating-bottom">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </span>
);

export default ReviewStar;
