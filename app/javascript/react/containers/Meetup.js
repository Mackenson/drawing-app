import React, { Component } from 'react';
import Meets from '../components/Meets';
import MeetDetails from '../components/MeetDetails';

class Meetup extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      meets: [],
      dropdown: null
    }
    this.handle = this.handle.bind(this)
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
        this.setState({
          meets: this.state.meets.concat(body["data"])
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handle(id){
      if (this.state.dropdown === null){
        this.setState({dropdown: id})
      } else {
        this.setState({dropdown: null})
      }
    }

  render(){
    let meets = this.state.meets.map((meet, i)=>{

      let description, Id, link;

      if (meet.id === this.state.dropdown){
         description = <p>{meet.description}</p>
         link = <div>Click here for more details on {meet.name}.</div>
       }
     let handle = () => {this.handle(meet.id)}

      return(
        <div key={i}>
          <Meets
            name={meet.name}
            click={handle}
          />

        <MeetDetails
          link={meet.link}
          description={meet.description}
        />

        </div>
      )
    })
    return(

      <div className="meet">
        <h1>Meet Up</h1>
        {meets}
      </div>
    )
    }
  }
export default Meetup
