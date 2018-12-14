import React from 'react';
import '../../../assets/stylesheets/home.scss'
import Particles from 'react-particles-js'

const animationOpt = {
  particles:{
    number:{
      value: 150,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render(){
    $('[rel=nav-bar]').hide()
    return(
      <div id='home'>
        <Particles
          params={animationOpt}
          />
      </div>
    )
  }
}

export default Home
