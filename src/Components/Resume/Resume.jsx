import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume ' id='resume'>
        <div className='container top'>
          <div className='heading text-center '>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex text-center '>
            <div className='left  sm:justify'>
              <div className='heading'>
                <h1>Education </h1>
              </div>

              <div className='content '>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}


                {/* md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 px-20 */}
                
              </div>
            </div>
            <div className='left text-center'>
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume