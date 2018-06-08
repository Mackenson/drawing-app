import React from 'react';
import PaintInfo from '../components/PaintInfo';
class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temps: []
    }
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/34c7152940073e33/conditions/q/CA/San_Francisco.json')
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
          temps: this.state.temps.concat(body.current_observation)
        });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let temperature = this.state.temps.map((temp)=>{
      return(
        <div>
          <PaintInfo
            temp_f={temp.temp_f}
          />
        </div>
      )
    })
    return(
      <div>{temperature}</div>
    )
    }
  }
export default Weather
