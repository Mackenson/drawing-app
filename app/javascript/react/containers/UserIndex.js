import React from 'react';
import PaintInfo from '../components/PaintInfo';
import Paint from '../components/Paint';
import Weather from './Weather';
import Meetup from './Meetup';

class UserIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      paints: [],
      paintSelected: null,
      paintsShown: []
    }
  this.sortPaints = this.sortPaints.bind(this)
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
          paints: body,
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

  sortPaints(event){
    let selectedCategory = this.state.paints.filter((paint) => {
      return (
        parseInt(paint.category) == event.target.value
      )
    })
    this.setState({ paintsShown: selectedCategory })
  }

 render(){
   let paints = this.state.paintsShown.map((paint)=>{
     let paintDescrip, paintId, paintlink;

     if (paint.id === this.state.paintSelected){
        paintDescrip = <div className="tile-descrip">{paint.body}</div>
        paintId = paint.id
        paintlink = <div className="tile-link">Click here for reviews and more details on {paint.title}.</div>
      }
    let handle = () => {this.handleClick(paint.id)}

     return(
         <div className="paint-tile-items" key = {paint.id}>
           <Paint
              name = {paint.title}
              body={paint.body}
              onClick = {handle}
             />
           <PaintInfo
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

export default UserIndex;
