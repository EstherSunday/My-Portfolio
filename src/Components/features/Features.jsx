import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import { motion } from "framer-motion"
import {fadeIn  } from  '../Variants'
import { icon2, icon3, icon4, icon5, icon6, icon7  } from "../../assets"



const Features = () => {
  return (
    <>
    <div id='skills' className='bg-violet-950  grid grid-cols-6 items-center px-5 py-5 '>
       <img className="wid " src={icon3 } alt="" srcset="" />  
      <img className="wids" src={ icon2 } alt="" /> 
       <img className="w-10" src={icon4 } alt="" srcset="" />  
       <img className="w-10" src={icon5 } alt="" srcset="" />  
       <img className="w-10" src={icon6 } alt="" srcset="" />  
       <img className="w-10" src={icon7 } alt="" srcset="" />  
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