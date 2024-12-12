import styles from "./ChartContainer.module.css"
import InfoToolbar from "../InfoToolbar/InfoToolbar"
import DataContainer from "../../DataContainer"

function ChartContainer() {
  
    return (
      <div className={styles.chartContainer}>
        <InfoToolbar/>
        <DataContainer/>
      </div>
    )
  }
  
  export default ChartContainer
  