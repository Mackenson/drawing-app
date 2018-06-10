import React from 'react';

const Temp = (props) => {
  console.log(props);
  return (
    <div id="left">
      <div id="api">
        <h1>Weather </h1>
        <img id="icon" src={props.icon} />
        <p className="temp">{props.temp}</p>
      </div>
    </div>
  );
}

export default Temp;
