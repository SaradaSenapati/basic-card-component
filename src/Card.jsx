import React from 'react'
import "./index.css"; // Importing the CSS file for styling

const Card = (props) => {
  return (
    <>

    

    <div className='card'>
        <img src={props.img} alt="" />
        <h3>Nature {props.text} Image</h3>
    </div>
      
    </>
  )
}

export default Card
