import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import { motion } from "framer-motion"
import {fadeIn  } from  '../Variants'
import { icon2 } from "../../assets"
import { icon3 } from "../../assets"
import { icon4 } from "../../assets"
import { icon5 } from "../../assets"


const Features = () => {
  return (
    <>
    <div id='skills' className='bg-violet-950  grid grid-cols-4 items-center px-10 py-10 '>
      <img className="w-20" src={ icon2 } alt="" /> 
       <img className="w-40 " src={icon3 } alt="" srcset="" />  
       <img className="w-10" src={icon4 } alt="" srcset="" />  
       <img className="w-10" src={icon5 } alt="" srcset="" />  
      </div>

      <motion.section 
       initial={{x:"100%",opacity:0}}
       whileInView={{x:0,opacity:1}}
       transition={{delay:0.8,duration:1}}

      className='features top'  id='id'>
        <div 
        className='container'>
          <div className='heading'>
            <h1 className="text-violet-900 text-center">My Skills</h1>
          </div>

          <div className='content grid 
            md:grid-cols-2  xl:grid-cols-3 
            sm:grid-cols-1 
          '>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}


          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Features