//BAR CHART
import React from "react";
import ChartComponent from "./ChartComponents.jsx";

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: "Sales",
        data: data.sales,
        backgroundColor: "rgba(153, 102, 255, 0.6)", // Chart data color
        borderColor: "rgba(153, 102, 255)", //Chart data border color
      },
    ],
  };

  const options = { responsive: true, plugins: { legend: { position: "top" } } };

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
