import React from 'react';

const TitleField = (props) => {
  return (
    <div className="form_field">
      <label>
        {props.label}
      </label>
        <input
          name={props.name}
          type='text'
          value={props.title}
          onChange={props.handleTitle}
        />
    </div>
  );
}

export default TitleField;
