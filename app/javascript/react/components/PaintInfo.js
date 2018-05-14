import React from 'react';

const PaintInfo = (props) => {
  console.log(props);
  return (
    <div>
      <div id="header-bckg"></div>
    <div id="photo-box">
      <h3 className="box-title">{props.title}</h3>
      <img src={props.photo} />
    </div>
  </div>
  );
}

export default PaintInfo;
