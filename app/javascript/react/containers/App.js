import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import User from './User';
import Meetup from './Meetup';
import PaintsForm from './PaintsForm';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={User} />
      <Route path='/paints' component={User} />
      <Route path='/paints/:id' component={PaintsForm} />
      <Route path='/meetup' component={Meetup} />
    </Router>
  );
}
export default App;
