import React, { useState } from 'react';
import styles from "./ChartContainer.module.css"
import InfoToolbar from "../InfoToolbar/InfoToolbar"
import ChartRenderer from "../ChartRenderer/ChartRenderer"

function ChartContainer() {
  const [range, setRange] = useState("day"); // Default range
  const [refreshKey, setRefreshKey] = useState(0);  // Refresh trigger

  // Handle refreshing
  const handleRefresh = () => {
      setRefreshKey((prev) => prev + 1);
  };

  // Handle range change
  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
      <div className={styles.chartContainer}>
        <InfoToolbar range={range} setRange={handleRangeChange} onRefresh={handleRefresh}/>
        <ChartRenderer range={range} refreshKey={refreshKey}/>
      </div>
  )
}
  
export default ChartContainer
  