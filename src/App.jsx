

import { FaFootballBall } from 'react-icons/fa';
import Feature from './Components/Feature';
import Getstart from './Components/Getstart';
import Header from './Components/Header';
import Home from './Components/Home';
import Stayproductive from './Components/Stayproductive';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
function App() {

  return (
    <>
  
      <Header ></Header>
      <Home></Home>
      <Feature />
      <Stayproductive />
      <Testimonials />
      <Getstart></Getstart>
      <Footer></Footer>
    </>
  )
}

export default App
