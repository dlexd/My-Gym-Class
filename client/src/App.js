import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutPage from './components/WorkoutPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/workouts" component={WorkoutPage} />
      </Switch>
    </Router>
  );
};

export default App;
