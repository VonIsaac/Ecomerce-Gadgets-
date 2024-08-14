'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { gadgets } from "./image-data"
import classes from './image-slider.module.css'



const ImageSlider = () => {
    //console.log("HELLO NEXT")
    
    const [imageSlider, setImageSlider ] = useState(0)

    useEffect(() => {
        const phoneTime = setInterval( () => {
            setImageSlider((prevSlide) => prevSlide < gadgets.length -1 ? prevSlide + 1: 0)
        }, 3000);


        return () => clearInterval(phoneTime)
    }, [])


    return(
        <div className ={classes.slider}>      
             {gadgets.map((img, index) => (
                <Image
                    key = {index}
                    src = {img.image}
                    className = {index === imageSlider ? classes.active: ''}
                    alt = {img.alt}
                    />
                ))}
        </div>
    )
}

export default ImageSlider
