import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import styles from "./ChartRenderer.module.css";
import useApi from "../../api/useApi";
import { getLineChartConfig, getBarChartConfig } from "../../utils/chartConfig";

function ChartRenderer({ range, refreshKey }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const { data, error } = useApi(range, refreshKey);
  const [type, setType] = useState("line");

  useEffect(() => {
    if (data && data.length > 0) {
      const canvas = canvasRef.current;

      // Destroy the previous chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const chartConfig =
        range === "day" || range.length === 8
          ? getLineChartConfig(data)
          : getBarChartConfig(data);

      chartRef.current = new Chart(canvas, chartConfig);
    }
  }, [data, range]); // Re-run when data changes

  return (
    <div className={styles.loadDiv}>
      {data ? (
        <canvas ref={canvasRef}></canvas>
      ) : (
        <div className={styles.loader}>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default ChartRenderer;
