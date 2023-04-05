import './App.css';
import React from 'react';
import MoviesList from './components/MoviesList';
import Slider from './components/Slider';

class App extends React.Component {

  render(){
    return (
      <>
        <MoviesList />
        <Slider />
        </>
    )
  }
}

export default App;
