import React from 'react';
import Info from '../components/Info';
import Paint from '../components/Paint';
import Weather from './Weather';
import Meetup from './Meetup';

class Paints extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      paintSelected: null,
      paintsShown: []
    }
  this.handleClick = this.handleClick.bind(this)
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
          paintsShown: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  handleClick(id){
    if (this.state.paintSelected === null){
      this.setState({paintSelected: id})
    } else {
      this.setState({paintSelected: null})
    }
  }

 render(){
   let paints = this.state.paintsShown.map((paint)=>{
     let paintDescrip, paintId;

     if (paint.id === this.state.paintSelected){
        paintDescrip = <div className="tile-descrip">{paint.body}</div>
        paintId = paint.id
      }
    let handle = () => {this.handleClick(paint.id)}

     return(
         <div className="paint-tile-items" key = {paint.id}>
           <Paint
              name = {paint.title}
              body={paint.body}
              onClick = {handle}
             />
           <Info
               title={paint.title}
               photo={paint.photo.url}
               description={paint.body}
               id={paint.id}
               link={paint.title}
              />
              <Weather />
              <Meetup />
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
      {paints}
    </div>
  )
}
}

export default Paints;
