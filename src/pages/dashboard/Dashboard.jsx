import React from "react";
import styles from "./Dashboard.module.css";
// import UserWidget from "../../components/UserWidget";

function Dashboard() {
    return (
        <div className={styles.page}>
            <div class={styles.container}>
            <div className={styles.userWidget}>
                {/* <UserWidget /> */}
            </div>
            <div className={styles.notesWidget}>
            </div>
            <div className={styles.timerWidget}></div>
            <div className={styles.weatherWidget}></div>
            <div className={styles.newsWidget}></div>
        </div>
        </div>
    );
}

export default Dashboard