import React, { Component } from 'react'
import './movie.css'

export default class Movie extends Component {

    
  render() {
    let {title } = this.props
    return (
      <div className='movie'><h3>{title}</h3></div>   
    )
  }
}
