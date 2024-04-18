import './App.css'
import Banner from './Parallax/Banner'
import Home from './component/Home'
import NavBar from './component/NavBar'
import Stats from './component/Stats'
import Why from './component/Why'
import Accordion from './component/Accordion'
import SocialMedia from './component/SocialMedia'
import Footer from './component/Footer'
import OurCar from './component/OurCar'
function App() {

  return (
    <>
      <NavBar />
      <Home />
      <Stats />
      <Banner />
      <Why />
      <OurCar />
      <Accordion />
      <SocialMedia />
      <Footer />
    </>
  )
}

export default App
