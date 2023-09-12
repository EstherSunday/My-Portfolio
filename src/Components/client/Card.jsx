import React from "react"

const Card = (props) => {
  return (
    <>
    
      <div className='box btn_shadow space'>
        <img src={props.image} alt='' />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  )
}

export default Card