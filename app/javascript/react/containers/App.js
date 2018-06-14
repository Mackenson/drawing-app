import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import User from './User';
import PaintsForm from './PaintsForm';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={User} />
      <Route path='/paints' component={User} />
      <Route path='/paints/:id' component={PaintsForm} />
    </Router>
  );
}
export default App;
