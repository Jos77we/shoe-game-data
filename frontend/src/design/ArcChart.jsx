import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

Chart.register(ArcElement);


const ArcChart = (props) => {
    const properties = props.color
    const ground = props.border
    const word = props.text
    const color = props.textColor
    const points = props.point
    const data = {
        datasets: [
          {
            data: points,
            backgroundColor: properties,
            display: true,
            borderColor: ground,
            borderRadius: 4
          }
        ]
      };
      const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 60).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             ctx.fillStyle = color;
             var text = word,
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]

      const options = {
        rotation: -90,
          circumference: 280,
          cutout: "92%",
          maintainAspectRatio: true,
          responsive: true,
          
      }
  return (
    <div>
        <Doughnut
        data={data}
        options={options}
        plugins={plugins}
      />
     
    </div>
  )
}

export default ArcChart