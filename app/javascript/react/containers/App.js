import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserIndex from './UserIndex';
import ContainersForm from './ContainersForm';

const App = (props) => {
  return (
    <Router history={browserHistory}>
    <Route path='/' component={UserIndex} />
    <Route path='/paints' component={UserIndex} />
    <Route path='/paints/:id' component={ContainersForm} />
    </Router>
  );
}
export default App;
