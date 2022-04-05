import React from 'react';
import "./Review.css";
import { StarIcon } from "@heroicons/react/solid";

const Review = (props) => {
    const { name, comment, picture } = props.review;
    
    return (
      <div>
        <div className="review">
          <img src={picture} alt="user-img" />
          <div>
            <h2>{name}</h2>
            <p>{comment}</p>
            <StarIcon className="icon" />
            <StarIcon className="icon" />
            <StarIcon className="icon" />
            <StarIcon className="icon" />
            <StarIcon className="icon" />
          </div>
        </div>

      </div>
    );
};

export default Review;