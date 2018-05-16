import React from 'react';

const Paint = props => {
  return (
    <li onClick={props.onClick}>
      <h3>{props.title}</h3>
    </li>
  )
}

export default Paint;
