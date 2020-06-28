import React from "react";

const ReviewDetails = () => (
  <div className="review-detail">
    <div className="review-author-block">
      <img
        className="review-author-headpic"
        alt="authorpic"
        src={`https://wp.getgolo.com/wp-content/uploads/2020/01/Rectangle-23.png`}
      ></img>
      <div className="author-detail">
        <div>Ann</div>
        <div>5 months ago</div>
      </div>
    </div>
    <div className="review-content">
      Excellent service and awesome food. Truly a 5 star restaurant. Service is
      seamless and spot on. Food was prepared perfectly.
    </div>
  </div>
);

export default ReviewDetails;
