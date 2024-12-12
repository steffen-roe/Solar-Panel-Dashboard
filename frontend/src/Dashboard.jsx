import ChartContainer from "./components/ChartContainer/ChartContainer"
import "./Dashboard.css"

function Dashboard() {
  
    return (
      <div className="dashboard">
        <div className="title">Solar Panel Dashboard</div>
        <ChartContainer/>
      </div>
    )
  }
  
  export default Dashboard
  