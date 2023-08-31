import React from 'react'
import './Designs.css'
//import '../components/DashboardOutline.css'

const DashboardLarge = () => {
  const repeatDivs = Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="circle-date">
        </div>
  
     ));
  return (
    <>
    <div className='calender'>
        <div className='calender-layout'>
          {repeatDivs}
        </div>
    </div>
   <div className='events'></div>
   <div className='activities'></div>
    </>
  )
}

export default DashboardLarge