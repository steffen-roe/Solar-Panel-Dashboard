import styles from "./InfoToolbar.module.css"

function InfoToolbar() {

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
            <div className={styles.right}>Test</div>
        </div>
    )
}

export default InfoToolbar