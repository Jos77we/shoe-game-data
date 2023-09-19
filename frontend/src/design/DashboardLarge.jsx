import React from "react";
import "./Designs.css";
import GetTotalProducts from "../fileApi/GetTotalProducts";
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

  // const list = [lastThreeDaysWithDayOfWeek, nextFiveDaysWithDayOfWeek]

  // Output the results
  console.log("Last Three Days:");
  console.log(lastThreeDaysWithDayOfWeek);

  console.log("Next Five Days:");
  console.log(nextFiveDaysWithDayOfWeek);
  // const num = [10];
  // const repeatDivs = Array.from({ length: 8 }).map((_, index) => (
  //   <div key={index} className="circle-date">
  //     {num}
  //   </div>
  // ));
  return (
    <>
      <div className="calender">
        <div className="calender-layout">
          {lastThreeDaysWithDayOfWeek.map((item, index) => (
            <div key={index} className = 'circle-square'>
              <p>{item.dayOfWeek}</p>
            <div className="circle-date">
              <p>{item.num}</p>
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
              <p>{item.num}</p>
              {/* <p>{item.dayOfWeek}</p> */}
            </div>
            </div>
          ))}
        </div>
      </div>
      <div className="events">
        <p>Recent Activities</p>
        <div
          style={{
            height: "50px",
            borderBottom: "1px solid black",
            marginTop: "2px",
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></div>
        <div
          style={{
            height: "50px",
            borderBottom: "1px solid black",
            marginTop: "2px",
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></div>
        <div
          style={{
            height: "50px",
            borderBottom: "1px solid black",
            marginTop: "2px",
            width: "90%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        ></div>
      </div>
      <div className="activities">
        <p>Logged in</p>
        <div style={{ height: "50px", border: "1px black solid" }}>
          <div className="circle-date1"></div>
        </div>
        <GetTotalProducts/>
      </div>
    </>
  );
};

export default DashboardLarge;
