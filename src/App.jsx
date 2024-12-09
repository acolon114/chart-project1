import React, { useEffect, useState } from "react";
import BarChart from "../components.jsx/BarChart.jsx";
import LineChart from "../components.jsx/LineChart.jsx";
import ScatterChart from "../components.jsx/ScatterChart.jsx";
import BubbleChart from "../components.jsx/BubbleChart.jsx";

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

      <h3>Bar Chart</h3>
      <BarChart data={chartData} />
      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

      <h3>Line Chart</h3>
      <LineChart data={chartData} />
      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

      <h3>Scatter Chart</h3>
      <ScatterChart data={chartData} />
      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />

      <h3>Bubble Chart</h3>
      <BubbleChart data={chartData} />
      <hr style={{ border: "1px solid #ccc", margin: "20px 0" }} />x
    </div>

  );
};

export default App;
