import React from 'react';

const Review = (props) => {
  let rating;

  if (props.rating === 1){
    rating = '★'
  }else if (props.rating === 2) {
    rating = '★★'
  }else if (props.rating === 3) {
    rating = '★★★'
  }else if (props.rating === 4) {
    rating = '★★★★'
  }else if (props.rating === 5) {
    rating = '★★★★★'
  };

  return (
    <div>
      <strong><div>{props.title}</div></strong>
      <div>Rating: {rating}</div>
      <div>Date Submitted: {props.date}</div>
      <div>Description: {props.body}</div><br></br>
    </div>
  )
}

export default Review;
