import ChartContainer from "./components/ChartContainer/ChartContainer"
import styles from "./Dashboard.module.css"

function Dashboard() {
  
    return (
      <div className={styles.dashboard}>
        <div className={styles.title}>Solar Panel Dashboard</div>
        <ChartContainer/>
      </div>
    )
  }
  
export default Dashboard
  