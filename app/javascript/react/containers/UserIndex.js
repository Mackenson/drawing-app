import React from 'react';
// import Cart from '../components/Cart';
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
        this.setState({
          paints: body
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){
    console.log(this.state.paints);
    // debugger
    let paints = this.state.paints.map((paint)=>{
      return(
        <img  src={paint.photo.url} />

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
