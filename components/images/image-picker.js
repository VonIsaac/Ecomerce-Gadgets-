'use client'

import Image from "next/image"
import { useState, useRef } from "react"
import classes from './image-picker.module.css'

const ImagePicker = ({label,name}) => {
    //set useState 
    const [imagePicker, setImagePicker] = useState()
    //set useRef
    const imageInput = useRef()

    const handleButtonImage = () => {
        // use .click to open the file 
        imageInput.current.click()
    }

    const handleSelectImage = (e) =>{
        const file = e.target.files[0]
        
        //if file not true wee setImagepic is set to null
        if(!file) {
            setImagePicker(null)
            return
        }

        // use the fileReader to read content of the file 
        const redFile = new FileReader()
        // use .onload to to succes the reading 
        redFile.onload = () => {
            // then use .result to to acces the file after reading
            setImagePicker(redFile.result)
        }
        // the FileReader reads the file as a data URL,
        redFile.readAsDataURL(file)
    }


  
    return(
        <div className  = {classes.picker}>
            <h1 className = " uppercase font-bold ">
                {label}
            </h1>
            <div className ={classes.control}>
                <div className ={classes.preview}>
                    {!imagePicker && <p className = " text-white">No Image yeat</p>}
                    {
                        imagePicker && (
                            <Image src = {imagePicker} alt = "AN IMAGE"  width={500} height={500} className = " w-[10rem]" />
                        )
                    }
                </div>

                <input
                    className = {classes.input} 
                    type = "file"
                    id = {name}
                    accept = "image/png, image/jpeg"
                    required
                    // ten pass to this ref
                    ref = {imageInput}
                    name = {name}
                    onChange = {handleSelectImage}
                />

                <button  className = {classes.button} type = "button" onClick = {handleButtonImage}>
                    Pick and Image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker