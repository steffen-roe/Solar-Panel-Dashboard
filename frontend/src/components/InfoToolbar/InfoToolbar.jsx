import styles from "./InfoToolbar.module.css"
import React, { useState } from 'react';


function InfoToolbar({ range, setRange, onRefresh }) {

    const today = new Date().toISOString().split("T")[0];
    const [selectedDate, setSelectedDate] = useState(today);
    
    // Format the date to ddmmyyyy
    const formatDate = (date) => {
        date = date.toLocaleDateString("en-GB").replace(/\//g, "");
        const day = date.substring(0, 2);
        const month = date.substring(2, 4);
        const year = date.substring(4, 8);
        return `${year}${month}${day}`;
    };

    // Handle manual date selection
    const handleDateChange = (event) => {
        const date = new Date(event.target.value);
        if (!isNaN(date)) {
            setSelectedDate(event.target.value);
            if (event.target.value === today) {
                setRange("day");  // Set to "day" if today is selected
            } else {
                setRange(formatDate(date));
            }
        }
    };

    // Navigate days forward/backward
    const changeDate = (days) => {
        const date = new Date(selectedDate);
        date.setDate(date.getDate() + days);
    
        // Prevent future dates
        if (date <= new Date()) {
            const newDateString = date.toISOString().split("T")[0];
            setSelectedDate(newDateString);
            if (newDateString === today) {
                setRange("day");  // Set to "day" if navigating to today
            } else {
                setRange(formatDate(date));
            }
        } 
    };
    

    return(
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.title}>PV Output</div>
                <div className={styles.subtitle}>
                    <div className={styles.subtext}>Update interval: 5 minutes </div>
                    <button className={styles.refreshButton} onClick={onRefresh}>
                        <span className={styles.refreshIcon}>↻</span>
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.datePicker}>
                    <button className={styles.button} onClick={() => changeDate(-1)}>&lt;</button>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        max={today}
                    />
                    <button className={styles.button} onClick={() => changeDate(1)}>&gt;</button>
                </div>
                <select onChange={(e) => setRange(e.target.value)} value={range}>
                    <option value="day">Day</option>
                    <option value="7">Last 7 Days</option>
                    <option value="30">Last 30 Days</option>
                </select>
            </div>
        </div>
    )
}

export default InfoToolbar