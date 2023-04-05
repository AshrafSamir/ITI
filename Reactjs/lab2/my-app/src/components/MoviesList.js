import React, { Component } from 'react'
import axios from 'axios'
import Movie from './Movie'
import './movieList.css'

export default class MoviesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        { id: 1, title: 'The Godfather', year: 1972 }

      ]
    }
  }
  componentDidMount(){
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd')
      .then(response => {
        console.log(response.data.results)
        this.setState({ movies: response.data.results })
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  render() {
    return (
      <div className='movie-list'>
        <h1>Movies List</h1>
        <ul>
          { this.state.movies.map((movie) => <Movie key={movie.id} title ={movie.title}/>) }
        </ul>
      </div>
    )
  }
}

