import React from 'react'
import Content from '../components/Content'
import Topbar from '../components/Topbar'
import '../App.css'

const Home = () => {
  return (
    <>
    <div className='homepage'>
    <Topbar/>
    <Content/>
    </div>
    </>
  )
}

export default Home