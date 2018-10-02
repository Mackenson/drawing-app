import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const Info = (props) => {
  return (
      <div id="photo-box" className="right">
        <div id="box">
          <h3 className="box-title">{props.title}</h3>
          <span className="hover"><img  id="paint-img" src={props.photo} /></span>
          <span className="back">{props.description}</span>
        </div>
        <button>
          <Link to={`/paints/${props.id}`} >
            Add Review
          </Link>
        </button>
      </div>
  );

}

export default Info;
