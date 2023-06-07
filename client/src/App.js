import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutPage from './components/WorkoutPage';
// import WorkoutSplit from './components/workoutSpit';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/workouts" component={WorkoutPage} />
        {/* <Route exact path="/workoutsplits" component={WorkoutSplit} /> */}
      </Switch>
    </Router>
  );
};

export default App;