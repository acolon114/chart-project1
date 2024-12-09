//LINE CHART
import React from "react";
import ChartComponent from "./ChartComponents.jsx";

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.months,

    datasets: [
      {
        label: "Profits", //X-axis label
        data: data.profits,
        borderColor: "rgba(153, 102, 255, 1)", //Line color
        fill: false,
      },
    ],
  };

  const options = { responsive: true };

  return <ChartComponent type="line" data={chartData} options={options} />;
};

export default LineChart;
