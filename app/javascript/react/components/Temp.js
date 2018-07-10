import React from 'react';
const Temp = (props) => {
  return (
    <div>
      <img id="icon" src={props.icon} />
      <p className="temp">{props.temp}</p>
    </div>
  );
}

export default Temp;
