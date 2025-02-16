import './App.css'
import { Chart } from "react-google-charts";

function App() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 1],
    ["Training", 1],
    ["Stady", 2],
    ["Housework", 4],
    ["Sleep", 7],
  ];

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    slices: {
      4: { offset: 0.2 }, // Explodes the second slice
    },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App
