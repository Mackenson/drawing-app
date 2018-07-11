import React from 'react';
import { Link } from 'react-router';

const MeetDetails = (props) => {
  return(
    <div>
        <p>{props.description}</p>
      <Link >
        {props.link}
      </Link>
    </div>
  )
}
export default MeetDetails
