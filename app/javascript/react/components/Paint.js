import React from 'react';
import '../../../assets/stylesheets/componentPaint.css'

const Paint = props => {
  return (
    <div>
      <img  id="img" src={props.photo} />
    </div>
  )
}

export default Paint;
