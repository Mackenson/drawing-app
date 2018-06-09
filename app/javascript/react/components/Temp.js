import React from 'react';

const Temp = (props) => {
  console.log(props);
  return (
    <div id="left">
      <div id="api">
        <h1>Weather </h1>
      <p className="temp">{props.temp}</p> <i className="fas fa-sun"></i>
      </div>
    </div>
  );
}

export default Temp;
