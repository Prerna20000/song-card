import React from "react";
import starimage from "../star.jpg"


const Rating = (props) => {
  return (
    <div className="rating">
      {[...Array(Math.round(props.rating <= 5 ? props.rating : 0)).keys()].map(
        (stars) => (
        <img src={starimage}  alt="" height="15px" className="star"/>)
      )}
    </div>
  );
};

export default Rating;
