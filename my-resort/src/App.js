import React from 'react';
import './App.css';
import Home from './Pages/Home'
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error'

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
