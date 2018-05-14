import React from 'react';

const RatingField = (props) => {
  return (
    <div className="form_field">
      <label>
        {props.label}
      </label>
      <select onChange={props.handleRating} value={props.rating}>
        <option value={1}>★</option>
        <option value={2}>★★</option>
        <option value={3}>★★★</option>
        <option value={4}>★★★★</option>
        <option value={5}>★★★★★</option>
      </select>
    </div>
  )
}

export default RatingField;
