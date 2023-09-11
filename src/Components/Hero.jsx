import React from "react";
// import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation";
import { icon1 } from "../assets";
import { motion } from "framer-motion"

const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
    // initial={{x:"100%",opacity:0}}
    // whileInView={{x:0,opacity:1}}
    // transition={{delay:0.5,duration:2}}

      id="home"
      className="h-[600px] flex items-center justify-center m-10"
    >
      <div className="flex flex-row justify-between items-center m-10 px-6">
        <motion.div
        initial={{x:"-100%",opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{delay:0.5,duration:2}}
        className="w-[30%] border-[3px] border-black rounded-xl h-auto ">
          <img src={icon1} alt="" className="w-full object-cover" />
        </motion.div>

        <motion.div 
        initial={{y:"100%",opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:1,duration:2}}
        className="w-[65%]">
          <div className="md:text-left text-center">
            <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
              <span className="text-violet-950	 md:text-5xl text-2xl">
                Hello, I am Esther sunday,
                <br />
              </span>
            </h1>
            <span className="text-2xl md:text-5xl text-violet-950">A </span>
            <TypeAnimation
              sequence={[
                "Front End  Developer.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "",
                1000,
                "Web Designer.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "3em",
                display: "inline-block",
                color: "rgb(76 29 149)",
                font: "bolder",
              }}
              repeat={Infinity}
            />
            {/* fontSize: '40px' */}

            <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
              {social_media?.map((icon) => (
                <div
                  key={icon}
                  className="text-violet-950 hover:text-violet-900 cursor-pointer "
                >
                  <a href="">
                    <ion-icon name={icon}></ion-icon>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
