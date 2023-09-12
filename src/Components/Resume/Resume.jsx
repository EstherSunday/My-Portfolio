import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import { motion } from "framer-motion"
const Resume = () => {
  return (
    <>
      <section className='Resume ' id='resume'>
        <div className='container top'>
          <div className='heading text-center '>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex text-center '>
            <motion.div 
             initial={{x:"-100%",opacity:0}}
             whileInView={{x:0,opacity:1}}
             transition={{delay:0.8,duration:1}}
            className='left  sm:justify'>
              <div className='heading'>
                <h1>Education </h1>
              </div>

              <div className='content '>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
                
              </div>
            </motion.div>

            <motion.div 
            initial={{x:"100%",opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{delay:0.8,duration:1}}
            className='left text-center'>
              <div className='heading'>
                <h1> Experience</h1>
              </div>

              <div className='content '>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume