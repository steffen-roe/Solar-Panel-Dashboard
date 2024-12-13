import styles from "./InfoToolbar.module.css"

function InfoToolbar({ range, onRangeChange }) {

    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.title}>PV Output</div>
                <div className={styles.subtitle}>
                    <div className={styles.subtext}>Update interval: 5 minutes </div>
                    <button className={styles.refreshButton}>
                        <span className={styles.refreshIcon}>↻</span>
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <select onChange={(e) => onRangeChange(e.target.value)} value={range}>
                    <option value="day">Day</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                </select>
            </div>
        </div>
    )
}

export default InfoToolbar