import React from "react";
import styles from "./WeatherWidget.module.css";

function WeatherWidget({ weather }) {

    const formatDate = () => {
        const formattedDate = new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const formattedTime = new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

        return [formattedDate, formattedTime];
    };

    return (
        <div className={styles.weatherWidget}>
            <div className={styles.header}>
                <h1>{formatDate()[0]}</h1>
                <h1>{formatDate()[1]}</h1>
            </div>
            <div className={styles.main}>
                <div>
                    <img src={weather.condition.icon} alt="weather icon" />
                    <div>{weather.condition.text}</div>
                </div>
                <div>
                    <div>{weather.temp_c}°C</div>
                    <div>
                        <div>{weather.pressure_mb} mbar</div>
                        <div>Pressure</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>{weather.wind_kph} km/h</div>
                        <div>Wind</div>
                    </div>
                    <div>
                        <div>{weather.humidity}%</div>
                        <div>Humidity</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherWidget