import React from 'react';

const Paint = props => {
  return (
    <div onClick={props.onClick}>
      <h3>{props.title}</h3>
    </div>
  )
}

export default Paint;
