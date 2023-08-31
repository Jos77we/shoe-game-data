import React from 'react'
import {Login} from '../components/Login'
import Topbar from '../components/Topbar'
import '../App.css'

const Home = () => {
  return (
    <>
    <div className='homepage'>
    <Topbar/>
    <Login/>
    </div>
    </>
  )
}

export default Home