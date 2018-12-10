import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import Home from './Home'
import Paints from './Paints';
import PaintsForm from './PaintsForm';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Home} />
      <Route path='/paints' component={Paints} />
      <Route path='/paints/:id' component={PaintsForm} />
    </Router>
  );
}
export default App;
