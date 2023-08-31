import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../components/DashboardOutline.css'

const GetUsersNumber = () => {
    const [num, setNum] = useState()

    useEffect(() =>{
        fetchUsersNum()
    })

    const fetchUsersNum = async() =>{
      try {
        const res = await axios.get("http://localhost:5000/api/user/count-users");
         setNum(res.data)
         console.log("The number is",res.data)
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <>
    <div className='dasboard3-item'>
      <div style={{marginTop:'auto', marginRight:'auto'}}>
    <p style={{color:"#09203F", fontWeight:"bold", marginTop:'0px', fontSize:'2.0rem', marginLeft:'20px' }}>{num}</p>
    
    </div>
       </div>
        
        </>
   
  )
}

export default GetUsersNumber