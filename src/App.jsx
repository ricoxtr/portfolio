import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HomePage } from './components/home'
import { AboutMe } from './components/about-me';
import { Gis } from './components/gis';
import { StyleGuide } from './components/style'; 
import './App.css';
import './nav.css';
import {Routes, Route} from 'react-router'
import { Navbar } from './components/nav';


function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Routes>
      <Route index element = {<HomePage />} />
      <Route path = 'aboutme' element = {<AboutMe />} />
      <Route path = 'gis' element = {<Gis />} />
      <Route path = 'style' element = {<StyleGuide />} />
    </Routes>

    </div>
  )
}

export default App
