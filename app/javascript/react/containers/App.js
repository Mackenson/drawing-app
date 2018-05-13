import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import UserIndex from './UserIndex';
import PaintInfo from '../components/PaintInfo';

const App = (props) => {
  return (
    <Router history={browserHistory}>
    <Route path='/' component={UserIndex} />
    <Route path='/UserIndex' component={UserIndex} />
    </Router>
  );
}
export default App;
