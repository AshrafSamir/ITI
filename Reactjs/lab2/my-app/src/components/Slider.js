import React from 'react'
import './slider.css'
import images from '../assets/images'


export default function Slider() {
    const [current, setCurrent] = React.useState(0)
    // const images = [img1, img2, img3]
    const previousHandler = () => {
        setCurrent((prevState)=>{
            if(prevState === 0){
                return 0
            } else {
                return prevState - 1
            }
        })
    }
    const nextHandler = () => {
        setCurrent((prevState)=>{
            if(prevState === 2){
                return 2
            } else {
                return prevState + 1
            }
        })
    }

  return (
    <div className='slider'>
        <img src={images[current]} alt="img"/>
        <button id="prev" onClick={previousHandler}>&lt;</button>
        <button id="next" onClick={nextHandler}>&gt;</button>

    </div>
  )
}
