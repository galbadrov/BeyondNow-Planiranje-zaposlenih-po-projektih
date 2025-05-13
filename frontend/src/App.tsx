import { useState } from 'react'
import './App.css'

import {Header} from './components/Header'
import {Login} from './components/Login'
import {Footer} from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
         <Header/>
         <Login/>
         <Footer/>
      </div>
    </>
  )
}

export default App
