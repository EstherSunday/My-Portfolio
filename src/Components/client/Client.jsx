import React from "react"
import "./Client-Api"
import data from "./Client-Api"
import Card from "./Card"


const Client = () => {
  return (
    <>
   

      <section className='features top '  id='id'>
        <div className='container  '>
          <div className='heading'>
            <h1 className="text-violet-900 text-center">Client Reviews</h1>
          </div>

          <div className='content grid sm:block'>
            {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })}

            
          </div>
        </div>
      </section>
    </>
  )
}

export default Client