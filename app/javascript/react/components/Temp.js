import React from 'react';

const Temp = (props) => {
  console.log(props);
  return (
    <div id="left">
      <h1>Temperature in fahrenheit </h1>
      {props.temp}
    </div>
  );
}

export default Temp;
