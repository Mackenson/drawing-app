import React from 'react';
import Temp from '../components/Temp';
class Weather extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      temps: []
    }
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/34c7152940073e33/conditions/q/MA/Boston.json')
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
    let temperature = this.state.temps.map((temp, i)=>{
      return(
        <div key={i}>
          <Temp
            image={temp.history_url}
            temp={temp.temp_f}
            icon={temp.icon_url}
          />
        </div>
      )
    })
    return(
      <div className="left">
        <div className="api">
          <h1>Weather</h1>
          {temperature}
        </div>
      </div>
    )
    }
  }
export default Weather
