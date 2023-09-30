import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

const StatisticsPieChart = ({ totalPrograms, totalDonations }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["Your Donation", "Total Programs"],
        datasets: [
          {
            data: [
              totalDonations && totalDonations,
              totalPrograms && totalPrograms,
            ],
            backgroundColor: ["#00C49F", "#FF444A"],
          },
        ],
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [totalPrograms, totalDonations]);

  return (
    <div>
      <canvas ref={chartRef} className="w-full md:w-[500px] max-w-[800px]" />
    </div>
  );
};

export default StatisticsPieChart;
