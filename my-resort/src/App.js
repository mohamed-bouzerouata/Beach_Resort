import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
          <Route exact   path='/' component={Home} />
          <Route exact   path='/Rooms' component={Rooms} />
          <Route exact   path='/Rooms/:slug' component={SingleRoom} />
          <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
