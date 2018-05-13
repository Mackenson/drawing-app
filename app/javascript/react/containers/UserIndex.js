import React from 'react';
import PaintInfo from '../components/PaintInfo';

class UserIndex extends React.Component {
  constructor(props){
    super(props)
    this.state={
      paints: []
    }
  }

  componentDidMount() {
    fetch('/paints.json')
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
        this.setState({
          paints: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    console.log(this.state.paints);
    let paints = this.state.paints.map((paint)=>{
      return(
        <PaintInfo
          title={paint.title}
          photo={paint.photo.url}
        />
      )
    })
    return(
      <div>
        {paints}
    </div>
    )
  }
}
export default UserIndex
