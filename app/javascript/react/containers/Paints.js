import React from 'react';
import $ from 'jquery'
import Info from '../components/Info';
import Paint from '../components/Paint';
import Weather from './Weather';
import Meetup from './Meetup';
import { Link } from 'react-router';
import '../../../assets/stylesheets/paint.css'

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
    componentDidMount() {
    this.handleClick();
  }

 render(){
   let paints = this.state.paints.map((paint)=>{

     return(
         <div className="paint-tile-items" key = {paint.id}>
           <div id="header-bckg">
             <Paint
              name = {paint.title}
              photo= {paint.photo.url}
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
         </div>
     )
   })
  return(
    <div>
      {paints}
    </div>
  )
}
}


export default Paints;
