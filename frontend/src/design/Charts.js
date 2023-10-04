import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Chart as ChartJS,
ArcElement,
Tooltip,
Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
//import GetTotalProducts from "../fileApi/GetTotalProducts";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend 
);

const Charts = () => {
const [total, setTotal] = useState([]);

const fetchAllTotal = async () => {
    try {
        const res = await axios.get("http://localhost:5000/product/total")
        setTotal(res.data)
        console.log(total)
     } catch (error) {
        console.log(error)
     }
}

useEffect(() => {
fetchAllTotal()
})

const sortedData = total.sort((a, b) => a.count - b.count);
const formattedData = sortedData.map((item) => item.count);

// const items = total.map((item) => item.count)
console.log("items inside")
  const data = {
  //  labels: ['Nike', 'Adidas', 'New balance', 'Puma'],
    datasets: [{
      labels: 'Shoes',
      data: formattedData,
      backgroundColor:['rgb(81, 46, 104)', 'rgb(34, 62, 122)', 'rgb(17, 54, 5)'],
      borderColor: ['rgb(81, 46, 104)', 'rgb(34, 62, 122)', 'rgb(17, 54, 5)'],

    }]
  }

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 100).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.fontWeight = 'bold';
         ctx.textBaseline = "top";
         var text = "Total",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]
  const options = {
    cutout: 45
  }

  return (
    <div style={{height:'120px'}}>
    <Doughnut data = {data} options={options} plugins={plugins}></Doughnut>
    </div>
  )
}

export default Charts