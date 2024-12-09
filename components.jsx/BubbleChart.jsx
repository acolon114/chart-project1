//BUBBLE CHART
import React from "react";
import ChartComponent from "./ChartComponents.jsx";

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Sales, Expenses, Profits", // X-axis labels
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 100, // Scale bubble size
        })),
        backgroundColor: "rgba(153, 102, 255, 0.6)", //Background color of data
        borderColor: "rgba(153, 102, 255)", //Border color of data

      },
    ],
  };

  //X and Y axis labels
  const options = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "Expenses" } },
      y: { title: { display: true, text: "Profits" } },
    },
  };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;