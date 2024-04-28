import axios from "axios";

const NEWS_API = process.env.REACT_APP_NEWS_API_KEY;

const fetchNewsData = async () => {
    const { data, status } = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API}`);
    if (status === 200) {
        return data.articles[0];
    }
}