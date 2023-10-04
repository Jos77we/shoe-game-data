import React from 'react'
import './DashboardOutline.css'
//import GetUsersNumber from '../fileApi/GetUsersNumber'
//import axios from 'axios'
import GetUsersNumber from '../fileApi/GetUsersNumber'
import DashboardLarge from '../design/DashboardLarge'
import Charts from '../design/Charts'
import BarChart from '../design/BarChart'
import ArcChart from '../design/ArcChart'
import {ArrowUpOutlined, ArrowDownOutlined, InstagramOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons'

const DashboardOutline = () => {

    return (
    <>
    <div className='dashboard-container'>
      <div className='dashboard-layout1'>
        <div className='dasboard1-item'>
        <p style={{fontWeight:'500', fontSize:'1.05rem', marginTop:'-0rem', marginLeft:'16px'}}>Stock Items</p>
        <div className = "dasboard-half">
        <Charts/>
          <div style={{marginLeft:'16px', fontSize:'0.7rem0'
          }}>
            <p>Adidas</p>
            <p>Puma</p>
            <p>New Balance</p>
          </div>
          </div>
          <div>
            <div style={{height:'20px', display:'grid'}}>
            <p style={{marginTop:'-2px', fontSize:'1.05rem', fontWeight:'600', marginLeft:'16px'}}>Available Stocks</p>
            </div>
            <div style={{display: 'flex', gridTemplateColumns:'auto', columnGap:'20px', justifyContent:'center'}}>
              <div style={{width:'70px', textAlign:'center'}}>
                <p>Units</p>
              <p style={{fontSize:'1.5rem', fontWeight:'bold', marginTop:'-5px'}}>4300</p>
              </div>
              <div style={{width:'70px', textAlign:'center'}}>
                <p>Featured</p>
                <p style={{fontSize:'1.5rem', fontWeight:'bold', marginTop:'-5px'}}>304</p>
              </div>
              <div style={{width:'70px', textAlign:'center'}}>
                <p>Discounted</p>
                <p style={{fontSize:'1.5rem', fontWeight:'bold', marginTop:'-5px'}}>150</p>
              </div>
           
            </div>
          </div>
        </div>
        <div className='dasboard2-item'>
          <p style={{fontWeight:'500', fontSize:'1.05rem'}}>Sales Analysis</p>
          <p>This week</p>
          <div style={{height:'170px', display:'flex', gridTemplateColumns:'auto', columnGap:'20px', justifyContent:'center', alignItems:'center'}}>
            <div style={{height:'160px', width:'80px'}}>
              <ArcChart color={["red", "blue"]} border={["red", "blue"]} text={"70"} textColor={"red"} point={[40, 50]}/>
              <div style={{display:'grid'}}>
                <p style={{marginTop:'-0.05px', textAlign:'center'}}>Income</p>
              <div style={{display:'flex', justifyContent:'center'}} >
                <ArrowUpOutlined style={{fontSize:'10px', color:'green'}}/>
              <p style={{marginTop:'-0.1px', fontSize:'1.05rem', marginLeft:'2px'}}>2.4%</p></div>
              </div>
              </div>
            <div style={{height:'160px', width:'80px'}}>
              <ArcChart color={["black", "blue"]} border={["black", "blue"]} text={"80"} textColor={"black"} point={[10, 70]}/>
            <div style={{display:'grid'}}>
                <p style={{marginTop:'-0.05px', textAlign:'center'}}>Income</p>
              <div style={{display:'flex', justifyContent:'center'}} >
                <ArrowDownOutlined style={{fontSize:'10px', color:'red'}}/>
              <p style={{marginTop:'-0.1px', fontSize:'1.05rem', marginLeft:'2px'}}>3.0%</p></div>
              </div>
              </div>
            <div style={{height:'160px', width:'80px'}}>
              <ArcChart color={["red", "purple"]} border={["red", "purple"]} text={"60"} textColor={"green"} point={[70, 20]}/>
              <div style={{display:'grid'}}>
                <p style={{marginTop:'-0.05px', textAlign:'center'}}>Income</p>
              <div style={{display:'flex', justifyContent:'center'}} >
                <ArrowUpOutlined style={{fontSize:'10px', color:'green'}}/>
              <p style={{marginTop:'-0.1px', fontSize:'1.05rem', marginLeft:'3px'}}>1.2%</p></div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className='dashboard-layout2' >
      <GetUsersNumber/>
        <div className='dasboard4-item'> 
          <BarChart/>   
        </div>
        <div className='dasboard5-item'>
          <div style={{height:'100px', width:'50px'}}>
            <div style={{marginLeft:'4,.5px', marginTop:'5px'}}><InstagramOutlined style={{fontSize:'24px'}}/></div>  
          <p style={{fontSize:'1.02rem', textAlign:'center'}}>20.4k</p>
          <p style={{fontSize:'0.7rem', marginTop:'-1rem'}}>followers</p></div>
          <div style={{height:'100px', width:'50px'}}>
          <div style={{marginLeft:'3px', marginTop:'5px'}}><TwitterOutlined style={{fontSize:'24px'}}/></div>
          <p style={{fontSize:'1.02rem', textAlign:'center'}}>17.6k</p>
          <p style={{fontSize:'0.7rem', marginTop:'-1rem'}}>retweets</p></div>
          <div style={{height:'100px', width:'50px'}}>
          <div style={{marginLeft:'3px', marginTop:'5px'}}><FacebookOutlined style={{fontSize:'24px'}}/></div>
          <p style={{fontSize:'1.02rem', textAlign:'center'}}>30.9k</p>
          <p style={{fontSize:'0.7rem', marginTop:'-1rem'}}>friends</p></div>
          <div style={{height:'150px', width:'100px', border:'1px solid black'}}></div>
        
        
        
        </div>
      </div>
      <div className='dashboard-layout3'>
        <DashboardLarge/>
      </div>
    </div>
    </>
  )
}

export default DashboardOutline