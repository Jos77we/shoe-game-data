import React from "react";
import "./Designs.css";
//import '../components/DashboardOutline.css'

const DashboardLarge = () => {
  const currentDate = new Date();

 
  const lastDays = [];

  for (let i = 2; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
    lastDays.push(date);
  }

  const nextDays = [];

  for (let i = 1; i <= 5; i++) {
    const upDate = new Date(currentDate);
    upDate.setDate(currentDate.getDate() + i);
    nextDays.push(upDate);
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const lastThreeDaysWithDayOfWeek = [];
  const nextFiveDaysWithDayOfWeek = [];

  // Populate the arrays with dates and corresponding days of the week
  lastDays.forEach((date) => {
    const dayOfWeek = daysOfWeek[date.getDay()];
    const num = date.getDate();
    lastThreeDaysWithDayOfWeek.push({ num, dayOfWeek });
  });

  nextDays.forEach((date) => {
    const dayOfWeek = daysOfWeek[date.getDay()];
    const num = date.getDate();
    nextFiveDaysWithDayOfWeek.push({ num, dayOfWeek });
  });

  const today = currentDate.getDate()
  
  return (
    <>
      <div className="calender">
        <div className="calender-layout">
          {lastThreeDaysWithDayOfWeek.map((item, index) => (
            <div key={index} className = 'circle-square'>
              <p>{item.dayOfWeek}</p>
            <div className="circle-date">
              <p className={`date ${item.num === today? "current" : "other"}`}>{item.num}</p>
              {/* <p>{item.dayOfWeek}</p> */}
            </div>
            </div>
          ))}
          {nextFiveDaysWithDayOfWeek.map((item) => (
            <div className = 'circle-square'>
              <div>
              <p>{item.dayOfWeek}</p>
              </div>
            <div className="circle-date">
              <p className={`date ${item.num === today ? "current" : "other"}`}>{item.num}</p>
              {/* <p>{item.dayOfWeek}</p> */}
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="events">
        <p style={{fontWeight:'500', fontSize:'1.2rem', marginTop:'-0.2px', marginLeft:'4px'}}>Activities</p>
        <div className="events-category">
        <div style={{height:'180px', width:'150px', borderRadius:'8px', backgroundColor:'rgb(241, 182, 157)'}}>
          <p style={{marginTop:"-0.5px", fontWeight:'500', fontSize:'1.02rem', marginLeft:'8px'}}>Events</p>
          <div style={{height:'50px', display:'flex', gridTemplateColumns:'auto', columnGap:'6px', alignItems:'center', justifyContent:'center'}}>
            <div style={{height:'40px', width:'20%', textAlign:'center'}}>
              <p style={{marginTop:'2px', fontSize:'0.6rem', fontWeight:'700'}}>Tue</p>
              <p style={{marginTop:'-6px', fontSize:'0.5rem'}}>09/04</p>
            </div>
            <div style={{height:'40px', width:'75%', borderLeft:'1px solid black'}}>
              <p style={{marginTop:'4px', fontSize:'0.63rem', marginLeft:'6px', fontWeight:'600'}}>Nike 360 Air Poster reveil</p>
            </div>
          </div>
          <div style={{height:'50px', display:'flex', gridTemplateColumns:'auto', columnGap:'6px', marginTop:'5px', alignItems:'center', justifyContent:'center'}}>
            <div style={{height:'40px', width:'20%', textAlign:'center'}}>
              <p style={{marginTop:'2px', fontSize:'0.6rem', fontWeight:'700'}}>Tue</p>
              <p style={{marginTop:'-6px', fontSize:'0.5rem'}}>09/04</p>
            </div>
            <div style={{height:'40px', width:'75%', borderLeft:'1px solid black'}}>
            <p style={{marginTop:'4px', fontSize:'0.63rem', marginLeft:'6px', fontWeight:'600'}}>Nike 360 Air Poster reveil</p>
            </div>
          </div>
        </div>
        <div style={{height:'180px', width:'150px', backgroundColor:'rgb(236, 98, 38)', borderRadius:'8px'}}>
        <p style={{marginTop:"-0.5px", fontWeight:'500', fontSize:'1.02rem', marginLeft:'8px'}}>Goals</p>
        <div style={{height:'60px', width:'95%', marginTop:'10px', borderBottom:'3px white solid'}}>
          <div>
            <p style={{fontSize:'0.65rem', marginLeft:'12px', fontWeight:'600'}}>Interaction</p>
          </div>
          <div>
            <p style={{fontSize:'0.6rem', marginLeft:'20px', marginTop:'-8px'}}>Increase interaction by 2.5% across platforms</p>
          </div>
        </div>
        <div style={{height:'60px', width:'95%', marginTop:'10px', borderBottom:'3px white solid'}}>
        <div>
            <p style={{fontSize:'0.65rem', marginLeft:'12px', fontWeight:'600'}}>30% Increase</p>
          </div>
          <div>
            <p style={{fontSize:'0.6rem', marginLeft:'20px', marginTop:'-8px'}}>Tap into new markets to drive profit up</p>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className="activities">
      <p style={{fontWeight:'500', fontSize:'1.05rem', marginLeft:'8px'}}>Contact</p>
        
        <div className = 'user-profile'>
          <div className="circle-date1"></div>
          <div className="label">
            <p style={{textAlign:'center', fontSize:'0.7rem'}}>Martin Luther</p>
          </div>
          <div className="label">
          <p style={{textAlign:'center', fontSize:'0.7rem'}}>Accountant</p>
          </div>
        </div>
        <div className = 'user-profile'>
          <div className="circle-date1"></div>
          <div className="label">
          <p style={{textAlign:'center', fontSize:'0.7rem'}}>Martin Luther</p>
          </div>
          <div className="label">
          <p style={{textAlign:'center', fontSize:'0.7rem'}}>Finance</p>
          </div>
        </div>
        <div className = 'user-profile'>
          <div className="circle-date1"></div>
          <div className="label">
          <p style={{textAlign:'center', fontSize:'0.7rem'}}>Martin Luther</p>
          </div>
          <div className="label">
          <p style={{textAlign:'center', fontSize:'0.7rem'}}>Human Resorce</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLarge;
