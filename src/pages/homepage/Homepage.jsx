import React, { useState, useEffect } from "react";
import styles from "./Homepage.module.css"
import axios from "axios";
import UserWidget from "../../components/UserWidget";
import NewsWidget from "../../components/NewsWidget";

function Homepage() {

    const WEATHER_API = process.env.REACT_APP_WEATHER_API_KEY;
    const NEWS_API = process.env.REACT_APP_NEWS_API_KEY;
    const [user, setUser] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [weather, setWeather] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
        setSelectedGenres(JSON.parse(localStorage.getItem("selectedGenres")));
        fetchWeatherData();
        fetchNewsData();
    }, []);

    const fetchWeatherData = async () => {
        const { data, status } = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API}&q=kishangarh`);
        if (status === 200) {
            setWeather(data.current);
        }
    }

    const fetchNewsData = async () => {
        const { data, status } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`);
        if (status === 200) {
            setNews(data.articles[0]);
        }
    }

    useEffect(() => {
        // console.log(weather);
        console.log(news);
    }, [weather, news]);

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
                {user && <UserWidget user={user} selectedGenres={selectedGenres} />}
                <div className={styles.weatherWidget}></div>
            </div>
            <div className={styles.right}>
                {news && <NewsWidget news={news} />}
            </div>
        </div>
    )
}

export default Homepage