import React from 'react';

const Meets = (props) => {
  return (
    <div id="meet-hide" onClick={props.click}>
      <h3>{props.name}</h3>
    </div>
  );
}

export default Meets;
