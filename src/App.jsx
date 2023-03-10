
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
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Dish1, Dish2, Dish3, Dish4 } from './componnent/CardOfOrderOfDish'

function App() {
return(
  <main>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<LandingSection/>}/>
      <Route index element={<LandingSection/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/Menue' element={<Heighlight/>}/>
      <Route path='/Reservation-table' element={<Raservation/>}/>
       <Route path='/dish1' element={<Dish1/>}/>
       <Route path='/dish2' element={<Dish2/>}/>
       <Route path='/dish3' element={<Dish3/>}/>
       <Route path='/dish4' element={<Dish4/>}/> 
    {/* <Header/> */}
    {/* <LandingSection/>   */}
    {/* <Heighlight/> */}
    {/* <Rating/> */}
    {/* <AboutUs/> */}
    {/* <Footer/> */}
    {/* <Raservation/> */}
    </Routes>
    </BrowserRouter>
  </main>

  )
}

export default App

