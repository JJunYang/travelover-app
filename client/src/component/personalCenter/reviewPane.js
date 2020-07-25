import React from "react";
import moment from "moment";
const ReviewPane = (props) => {
  return (
    <div id="reviewPane">
      <h2>Place Reviews</h2>
      <hr></hr>
      {props.reviewList.length < 1 ? (
        <div>No Result</div>
      ) : (
        <>
          <ul>
            {props.reviewList.map((review, i) => {
              return (
                <li key={i}>
                  <div>
                    <span>Place: </span>
                    <span className="review-title">{review.place.name}</span>
                    <div>
                      <span>Star: </span>
                      {review.star}
                    </div>
                  </div>
                  <div>
                    <span>Content: </span>
                    <span className="review-content">{review.content}</span>
                  </div>
                  <div>
                    <span className="review-date">
                      {moment(review.date).format("lll")}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};
export default ReviewPane;
