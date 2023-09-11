
import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Features from './Components/features/Features'
import Projects from './Components/project/Projects'
import Resume from './Components/Resume/Resume'
import Client from './Components/client/Client'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'








function App() {
 

  return (
    <div className='overflow-x-hidden'>
 <Navbar />
 <Hero />
 <About />
 <Features />
 <Projects />
 <Resume />
 <Client />
 <Contact />
 <Footer />



 


    </div>
  )
}



export default App
