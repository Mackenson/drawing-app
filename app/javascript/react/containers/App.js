import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Paints from './Paints';
import Meetup from './Meetup';
import PaintsForm from './PaintsForm';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Paints} />
      <Route path='/paints' component={Paints} />
      <Route path='/paints/:id' component={PaintsForm} />
    <Route path='/meetups' component={Meetup} />
    </Router>
  );
}
export default App;
