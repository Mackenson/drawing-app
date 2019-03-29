import React from 'react';
import Info from '../components/Info';
import Paint from '../components/Paint';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      paints: [],
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
           <Info
               title={paint.title}
               photo={paint.photo.url}
               description={paint.body}
               id={paint.id}
               link={paint.title}
              />
         </div>
     )
   })
  return(
    <div>
      <div id="header-bckg">
        <div id="text-photo">
        </div>
      </div>
      <div id="display">
        {paints}
      </div>
    </div>
  )
}
}

export default User;
