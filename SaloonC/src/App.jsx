import { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import AOS from "aos"
import "aos/dist/aos.css"
import Hero from './component/Hero';





function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1500,
    });
  },[]);
  return (
    <>
      <Navbar/>
      <Hero/>

    </>
      
  )
}

export default App
