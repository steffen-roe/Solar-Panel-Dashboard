import React, { useState } from 'react';
import styles from "./ChartContainer.module.css"
import InfoToolbar from "../InfoToolbar/InfoToolbar"
import ChartRenderer from "../ChartRenderer/ChartRenderer"

function ChartContainer() {
  const [range, setRange] = useState("day"); // Default range

  // Handle range change
  const handleRangeChange = (newRange) => {
    setRange(newRange);
  };

  return (
      <div className={styles.chartContainer}>
        <InfoToolbar range={range} setRange={handleRangeChange}/>
        <ChartRenderer range={range}/>
      </div>
  )
}
  
export default ChartContainer
  