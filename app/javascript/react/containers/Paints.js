import React from 'react';
import $ from 'jquery'
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
        console.log(body);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

 render(){
   let paints = this.state.paints.map((paint)=>{
     let description, Id;
     if (paint.id === this.state.meet){
        descrip = <div>{paint.body}</div>
        paintId = paint.id
      }

     return(
         <div className="paint-tile-items" key = {paint.id}>
           <div>
             <Paint
              name = {paint.title}
              body={paint.body}
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
      <div id="mobile-nav" style={{display: "none"}}>
        <i className="fas fa-bars"></i>
      </div>
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
