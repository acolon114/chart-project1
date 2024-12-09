//SCATTER CHART
import React from "react";
import ChartComponent from "./ChartComponents.jsx";

const ScatterChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: "Expenses vs Profits", //X-axis labels
        data: data.expenses.map((expense, idx) => ({ //Sales numbers
          x: expense,
          y: data.profits[idx],
        })),
        backgroundColor: "rgba(153, 102, 255, 0.6)", //Chart color
        borderColor: "rgba(153, 102, 255)", //Chart border color
      },
    ],
  };

  const options = { responsive: true, scales: { x: { type: "linear" } } };

  return <ChartComponent type="scatter" data={chartData} options={options} />;
};

export default ScatterChart;
