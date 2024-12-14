import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import styles from "./ChartRenderer.module.css";
import useApi from '../../api/useApi';

function ChartRenderer({ range, refreshKey}) {
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

      // Process data into labels and datasets
      let labels = [];
      let powerData = [];
      let energyData = [];

      if (range === "day" || range.length === 8) {
        labels = data.map(({ time }) => time); 
        powerData = data.map(({ power }) => power); 
        energyData = data.map(({ energy }) => energy); 
        setType("line");
      } else if (range === "7" || range === "30") {
        labels = data.map(({ date }) => date); 
        energyData = data.map(({ max_energy }) => max_energy); 
        setType("bar");
      }

      if (type === "line") {
        chartRef.current = new Chart(canvas, {
          type: 'line', // Choose chart type based on range
          data: {
            labels,
            datasets: [
              {
                label: 'Power Output (W)',
                data: powerData,
                borderColor: '#FF6F00',
                backgroundColor: 'rgba(255, 111, 0, 0.2)',
                tension: 0.4, 
                fill: false,
                yAxisID: 'y', 
                pointRadius: 0, 
                borderWidth: 4,
              },
              {
                label: 'Energy Generated (kWh)',
                data: energyData, 
                borderColor: '#007BFF',
                backgroundColor: 'rgba(0, 123, 255, 0.2)', 
                tension: 0.4, 
                fill: true, 
                yAxisID: 'y1',
                pointRadius: 0, 
                borderWidth: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: '#ffffff',
                  font: {
                    size: 14,
                  },
                  boxHeight: '0',
                },
                display: true,
                position: 'bottom',
                align: 'center',
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Time of Day', 
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0)',
                },
                ticks: {
                  maxTicksLimit: 10, 
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Power (W)',
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                beginAtZero: true,
                position: 'left', 
              },
              y1: {
                title: {
                  display: true,
                  text: 'Energy (kWh)',
                },
                grid: {
                  drawOnChartArea: false, 
                },
                position: 'right', 
                beginAtZero: true,
              },
            },
          },
        });
      } else if (type === "bar") {
        chartRef.current = new Chart(canvas, {
          type: 'bar', // Choose chart type based on range
          data: {
            labels,
            datasets: [
              {
                label: 'Energy Generated (kWh)',
                data: energyData, 
                borderColor: '#007BFF',
                backgroundColor: 'rgba(0, 123, 255, 0.7)', 
                tension: 0,
                fill: true, 
                pointRadius: 0,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  color: '#ffffff',
                  font: {
                    size: 14,
                  },
                },
                display: true,
                position: 'bottom',
                align: 'center',
              },
            },
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Date', 
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0)',
                },
                ticks: {
                  maxTicksLimit: 7, 
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Energy (kWh)',
                },
                grid: {
                  color: 'rgba(255, 255, 255, 0.1)',
                },
                position: 'left',
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data, range]); // Re-run when data changes

  return (
    <div className={styles.loadDiv}>
      {data ? (
        <canvas ref={canvasRef}></canvas>
      ) : (
        <div className={styles.loader}>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default ChartRenderer;
