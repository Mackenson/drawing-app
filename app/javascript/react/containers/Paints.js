import React from 'react';
import Info from '../components/Info';
import Paint from '../components/Paint';
import Weather from './Weather';
import Meetup from './Meetup';
import { Link } from 'react-router';

class Paints extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      meet: null,
      paints: []
    }
  this.handle = this.handle.bind(this)
  }
  componentDidMount() {
    fetch('/api/v1/paints.json')
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
          paints: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handle(id){
    if (this.state.meet === null){
      this.setState({meet: id})
    } else {
      this.setState({meet: null})
    }
  }

 render(){
   let paints = this.state.paints.map((paint)=>{
     let description, Id;

     if (paint.id === this.state.meet){
        descrip = <div>{paint.body}</div>
        paintId = paint.id
      }
    let handle = () => {this.handle(paint.id)}

     return(
         <div className="paint-tile-items" key = {paint.id}>
           <div>
             <Paint
              name = {paint.title}
              body={paint.body}
              onClick = {handle}
              />
           </div>
           <div>
             <Info
               title={paint.title}
               photo={paint.photo.url}
               description={paint.body}
               id={paint.id}
               link={paint.title}
              />
          </div>
            <Weather />
         </div>
     )
   })
  return(
    <div>
      <div id="header-bckg">
        <div id="text-photo">
          <h1>Welcome to Boston Painting</h1>
        </div>
      </div>
      <div className="button radius">
        <Link to='/meetups' className="button-meet">Meetup</Link>
      </div>
      {paints}
    </div>
  )
}
}

export default Paints;
