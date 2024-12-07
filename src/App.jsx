import React, { useEffect, useState } from "react";
import BarChart from "../components.jsx/BarChart.jsx";
//import LineChart from "./components.jsx/LineChart.jsx";
//import ScatterChart from "./components.jsx/ScatterChart.jsx";
//import BubbleChart from "./components.jsx/BubbleChart.jsx";

const App = () => {
  const [chartData, setChartData] = useState(null);

  //Task 4: Fetch Data from Charts
  useEffect(() => {
    //Fetch Data from financial_data.json
    fetch("../components.jsx/financial_data.json")
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!chartData) return <p>Loading...</p>;

// Task 5: Render All Charts in the App
  return (
    <div>
      <h1>Interactive Dashboard</h1>
      <BarChart data={chartData} />
      {/*<LineChart data={chartData} />
      <ScatterChart data={chartData} />
      <BubbleChart data={chartData} />*/}
    </div>
  );
};

export default App;
