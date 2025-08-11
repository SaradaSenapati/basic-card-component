import React from 'react'
import Card from './Card'
import img1 from "./assets/mg-1.jpg";
import img2 from "./assets/mg-2.jpg";
import img3 from "./assets/mg-3.webp";

const App = () => {
  return (
    <>

    <h1 className='heading'> Image Gallery</h1>

    <div className='card-container'>
    <Card img ={img1} text={1}/>
    <Card img ={img2} text={2}/>
    <Card img ={img3} text={3}/>
    <Card img ={img2} text={4}/>
    <Card img ={img3} text={5}/>
    <Card img ={img1} text={6}/>
    
    </div>
    
      
    </>
  )
}

export default App
