import React from 'react';

const Meets = (props) => {
  return (
    <li onClick={props.click}>
      <h3>{props.name}</h3>
    </li>
  );
}

export default Meets;
