import React from 'react';
import { Link } from 'react-router';

const PaintInfo = (props) => {
  return (
    <div>
      <div id="photo-box" className="right">
        <div id="box">
          <h3 className="box-title">{props.title}</h3>
          <span className="hover"><img src={props.photo} /></span>
          <span className="back">{props.description}</span>
        </div>
        <button>
          <Link to={`/paints/${props.id}`} >
          Add Review
          </Link>
        </button>
      </div>
      <div id="left">
        <h1>Today's Weather</h1>
        <p>
          {props.temp_f}
        </p>
      </div>
  </div>
  );
}

export default PaintInfo;
