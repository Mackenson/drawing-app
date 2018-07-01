import React from 'react';

const Temp = (props) => {
  return (
    <div>
      <img id="icon" src={props.icon} />
      <p className="temp">{props.temp}</p>
      <img src={props.image} />
    </div>
  );
}

export default Temp;
