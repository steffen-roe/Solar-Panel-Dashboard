import styles from "./ChartContainer.module.css"
import InfoToolbar from "../InfoToolbar/InfoToolbar"
import ChartRenderer from "../ChartRenderer/ChartRenderer"

function ChartContainer() {
  
    return (
      <div className={styles.chartContainer}>
        <InfoToolbar/>
        <ChartRenderer/>
      </div>
    )
  }
  
  export default ChartContainer
  