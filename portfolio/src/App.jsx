import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './frontend/Navbar'
import Main from './frontend/Main'
import Tools from './frontend/Tools'
import Services from './frontend/Services'
import Project from './frontend/Project'
import Blog from './frontend/Blog'
import Contact from './frontend/Contact'
import Faqs from './frontend/Faqs'
import Testimonials from './frontend/Testimonials'
import Footer from './frontend/Footer'

function App() {


  return (
    <>
     <div id="home" class="w-full mx-auto p-6 space-y-6">
      <Navbar />
      <Main/>
      <Tools/>
      <Services/>
      <Project/>
      <Contact/>
      <Testimonials/>
      <Blog/>
      <Faqs/>
      <Footer/>
      </div>
    </>
  )
}



export default App
