import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Review from "./Review"
import Services from "./Services"


const Home = () => {
  return (
    <div id="home">
        <Navbar />
        <Hero/>
        <Services/>
        <About/>
        <Review/>
        <Contact/>
        <Footer/>
        

    </div>
  )
}

export default Home