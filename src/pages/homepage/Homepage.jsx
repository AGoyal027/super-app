import React, { useState, useEffect } from "react";
import { genres } from "../../assets/data/genres"
import userAvatar from "../../assets/images/userAvatar.png";
import styles from "./Homepage.module.css"
import axios from "axios";

function Homepage() {

    const [user, setUser] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [weather, setWeather] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        const { data, status } = await axios.get("https://api.weatherapi.com/v1/current.json?key=4e3660293d9f4f23905113655241804&q=kishangarh");
        if (status == 200) {
            setWeather(data.current);
        }
    }

    useEffect(() => {
        console.log(weather);
    }, [weather]);

    // useEffect(() => {
    //     genres.map((genre, index) => {
    //         if (selectedGenres.includes(index)) {
    //             console.log(genre);
    //         }
    //     })
    // }, [selectedGenres])

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                {user && (<div className={styles.userWidget}>
                    <img src={userAvatar} alt="user avatar" />
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                    <h1>{user.username}</h1>
                    {selectedGenres.length > 0 && <div className={styles.genreGrid}>
                        {selectedGenres.map((genre) => (
                            <div>{genres[genre].title}</div>
                        ))}
                    </div>}
                </div>)}
                <div className={styles.weatherWidget}></div>
            </div>
            <div className={styles.right}></div>
        </div>
    )
}

export default Homepage