import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { CgVercel } from "react-icons/cg";

const Contact = () => {
  
  const contact_info = [
    { logo: "mail", text: "sunday.esther.aniema@gmail.com" },
    { logo: "logo-whatsapp", text: "07087232383" },
    {
      logo: "location",
      text: "Salem Bus Stop Lekki, Lagos ",
    },
  ];
  return (
<>
    <section id="contact" className="py-10  px-3 text-white">
     
      <div className="text-center mt-8 " >
        <h3 className="text-4xl font-semibold text-violet-950 ">
          Contact me 
        </h3>
        <p className=" mt-3 text-lg text-violet-950 ">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col 
         gap-6 max-w-6xl bg-violet-950 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex  flex-col flex-1 gap-5 text-black">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="text-white  w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-5 ">
          <div className="text-2xl">SOCIAL</div>
          <a href=""> < FaLinkedin className="text-3xl text-violet-400" /></a>
          <a href=""> <GrTwitter className="text-3xl text-violet-400" /></a>
          <a href=""> <GrInstagram className="text-3xl text-violet-400"/></a>
          <a href=""> <CgVercel className="text-4xl text-violet-400"/></a> 
            
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-violet-600 rounded-full ">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-white text-white  break-words">
                  {contact.text}
                </p>
              </div>
              
            ))}
          </div>

        </div>
      </div>

    </section>
    
    </>
  );
};

export default Contact;