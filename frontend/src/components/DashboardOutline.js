import React from 'react'
import './DashboardOutline.css'
//import GetUsersNumber from '../fileApi/GetUsersNumber'
//import axios from 'axios'
import GetUsersNumber from '../fileApi/GetUsersNumber'
import DashboardLarge from '../design/DashboardLarge'

const DashboardOutline = () => {

  // const [num, setNum] = useState()

  //   useEffect(() =>{
  //       fetchUsersNum()
  //   })

  //   const fetchUsersNum = async() =>{
  //     try {
  //       const res = await axios.get("http://localhost:5000/api/user/count-users");
  //        setNum(res.data)
  //        console.log("The number is",res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  return (
    <>
    <div className='dashboard-container'>
      <div className='dashboard-layout1'>
        <div className='dasboard1-item'></div>
        <div className='dasboard2-item'></div>
      </div>
      <div className='dashboard-layout2' >
      <GetUsersNumber/>
        <div className='dasboard4-item'></div>
        <div className='dasboard5-item'></div>
        
      </div>
      <div className='dashboard-layout3'>
        <DashboardLarge/>
      </div>
    </div>
    </>
  )
}

export default DashboardOutline