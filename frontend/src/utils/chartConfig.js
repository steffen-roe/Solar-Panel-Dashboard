export const getLineChartConfig = (data) => ({
  type: "line",
  data: {
    labels: data.map(({ time }) => time),
    datasets: [
      {
        label: "Power Output (W)",
        data: data.map(({ power }) => power),
        borderColor: "#FF6F00",
        backgroundColor: "rgba(255, 111, 0, 0.2)",
        tension: 0.4,
        fill: false,
        yAxisID: "y",
        pointRadius: 0,
        borderWidth: 4,
      },
      {
        label: "Energy Generated (kWh)",
        data: data.map(({ energy }) => energy),
        borderColor: "#007BFF",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.4,
        fill: true,
        yAxisID: "y1",
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
          color: "#ffffff",
          font: { size: 14 },
        },
        display: true,
        position: "bottom",
        align: "center",
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Time of Day" },
        grid: { color: "rgba(255, 255, 255, 0)" },
        ticks: { maxTicksLimit: 10 },
      },
      y: {
        title: { display: true, text: "Power (W)" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        beginAtZero: true,
        position: "left",
      },
      y1: {
        title: { display: true, text: "Energy (kWh)" },
        grid: { drawOnChartArea: false },
        beginAtZero: true,
        position: "right",
      },
    },
  },
});

export const getBarChartConfig = (data) => ({
  type: "bar",
  data: {
    labels: data.map(({ date }) => date),
    datasets: [
      {
        label: "Energy Generated (kWh)",
        data: data.map(({ max_energy }) => max_energy),
        borderColor: "#007BFF",
        backgroundColor: "rgba(0, 123, 255, 0.7)",
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
        labels: { color: "#ffffff", font: { size: 14 } },
        display: true,
        position: "bottom",
        align: "center",
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Date" },
        grid: { color: "rgba(255, 255, 255, 0)" },
        ticks: { maxTicksLimit: 7 },
      },
      y: {
        title: { display: true, text: "Energy (kWh)" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
        beginAtZero: true,
        position: "left",
      },
    },
  },
});
