import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const CommentPane = (props) => {
  return (
    <div id="commentPane">
      <h2>Topic Comments</h2>
      <hr></hr>
      {props.commentList.length < 1 ? (
        <div>No Result</div>
      ) : (
        <>
          <ul>
            {props.commentList.map((comment, i) => {
              return (
                <li key={i}>
                  <Link to={`/topic/details/${comment.topic._id}`}>
                    <span className="review-title">{comment.topic.name}</span>
                  </Link>
                  <div>
                    Content: <span>{comment.content}</span>
                  </div>
                  <div>
                    <span className="review-date">
                      {moment(comment.date).format("lll")}
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
export default CommentPane;
