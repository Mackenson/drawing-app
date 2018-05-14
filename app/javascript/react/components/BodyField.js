import React from 'react';

const BodyField = (props) => {
  return (
    <div className="form_field">
      <label>
        {props.label}
      </label>
        <textarea
          name={props.name}
          type='text'
          value={props.body}
          onChange={props.handleBody}
        />
    </div>
  )
}

export default BodyField;
