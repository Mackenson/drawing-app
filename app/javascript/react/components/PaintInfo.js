import React from 'react';
import { Link } from 'react-router';

const PaintInfo = (props) => {
  console.log(props);
  return (
    <div>
      <div id="header-bckg"></div>
    <div id="photo-box">
      <h3 className="box-title">{props.title}</h3>
      <img src={props.photo} />
    <button><Link to={`/paints/${props.id}`} >
    Add Review
  </Link></button>
    </div>
  </div>
  );
}

export default PaintInfo;
