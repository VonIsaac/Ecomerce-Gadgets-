'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
//import { gadgets } from "./image-data"
import classes from './image-slider.module.css'

import SamsungS24 from "@/assets/samsung-s24-ultra.jpg";
import SamsungA55 from "@/assets/samsung-a55-5g.jpg";
import Iphone14 from "@/assets/iphone-14.jpg";
import Iphone15 from "@/assets/iphone-15.jpg"
import OppoA78 from "@/assets/oppo-a-78-4g.jpg"
import InfinixNote40 from "@/assets/infinix-note-40.jpg"
import GooglePixel6 from "@/assets/google-pixel6.jpg"


 const gadgets = [
    {image: SamsungS24, alt: "A samsung S24"},
    {image: SamsungA55, alt: " A Samsung A55"},
    {image: Iphone14, alt: " A Iphone 14"},
    {image: Iphone15, alt: " A Iphone 15"},
    {image: OppoA78, alt: " A Oppo A78"},
    {image: InfinixNote40, alt: " A Infinix Note 40"},
    {image: GooglePixel6, alt: " A Google Pixe l6"},
]

const ImageSlider = () => {
    //console.log("HELLO NEXT")
    
    const [imageSlider, setImageSlider ] = useState(0)

    useEffect(() => {
        const phoneTime = setInterval( () => {
            setImageSlider((prevSlide) => prevSlide < gadgets.length -1 ? prevSlide + 1: 0)
        }, 4000);


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
