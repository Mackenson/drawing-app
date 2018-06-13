import React from 'react';
import Meets from '../components/Meets';
class Meetup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      meets: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/meetups.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        console.log(body);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let meets = this.state.meets.map((meet, i)=>{
      return(
        <div key={i}>
          <Meet

          />
        </div>
      )
    })
    return(
      <div>{meets}</div>
    )
    }
  }
export default Meetup
