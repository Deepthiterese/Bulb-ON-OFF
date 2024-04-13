import React from 'react'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'

export const Main = () => {
    const [img,setImage]=useState(img1)
    const changeImage1 = ()=>{
        setImage(img2)
    }
    const changeImage2 = ()=>{
        setImage(img1)}
  return (
    <div>
    <h1  style={{textAlign: "center"}}>Click to ON/OFF the bulb!</h1>
    <Button onClick={changeImage1}  style={{textAlign: "center"}}>ON</Button>
    <Button onClick={changeImage2}  style={{textAlign: "center"}}>OFF</Button>
    <img src={img}/>
    </div>
  )
}
