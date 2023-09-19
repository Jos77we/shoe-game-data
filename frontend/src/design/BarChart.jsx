import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Data set",
        data: [65, 59, 60, 40, 80, 30, 15],
        backgroundColor: "rgb(34, 62, 122)",
        borderColor: "rgb(34, 62, 122)",
        borderWidth: 1,
        barThickness: 20,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        border: {
            display: false,
          },
        grid: {
          display: false,
        },
      },
      y: {
        
       display: false,
        grid: {
          display: false,
        },
      },
     
    },
  };

  return (
    <div>
      <p>BarChart example</p>
      <div >
      <Bar data={data} options={options}></Bar>
      </div>
    </div>
  );
};

export default BarChart;
