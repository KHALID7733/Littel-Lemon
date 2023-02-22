
import { useState } from 'react'
import AboutUs from './componnent/about'
import Footer from './componnent/Footer'
import Header from './componnent/header'
import Heighlight from './componnent/heighlighted'
import LandingSection from './componnent/LandingSection'
import Rating from './componnent/ratin'
import Raservation from './componnent/reserveTable'
// import { AlertProvider } from './context/alertContext'

// import './App.css'



function App() {
return(
  <main>
    
    <Header/>
    <LandingSection/>  
    <Heighlight/>
    <Rating/>
    <AboutUs/>
    <Footer/>
    <Raservation/>
    
  </main>

  )
}

export default App

