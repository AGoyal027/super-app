import React from "react";
import styles from "./NewsWidget.module.css";

function NewsWidget({ news }) {

    const formatDate = (date) => {
        if (date) {
            const formattedDate = new Date(news.publishedAt).toLocaleDateString(
                "en-US",
                {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }
            );
            const formattedTime = new Date(news.publishedAt).toLocaleTimeString(
                "en-US",
                {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                }
            );

            return `${formattedDate} | ${formattedTime}`;
        } else {
            const formattedDate = new Date().toLocaleDateString(
				"en-US",
				{
					year: "numeric",
					month: "long",
					day: "numeric",
				}
			);
			const formattedTime = new Date().toLocaleTimeString(
				"en-US",
				{
					hour: "numeric",
					minute: "numeric",
					hour12: true,
				}
			);

			return `${formattedDate} | ${formattedTime}`;
        }
    };

    return (
        <div className={styles.newsWidget}>
            <div className={styles.header}>
                <img src={news.urlToImage} alt="News Image" />
                <div className={styles.headerText}>
                    <h2>{news.title.split("-")[0]}</h2>
                    <p>{formatDate(news.publishedAt)}</p>
                </div>
            </div>
            <div className={styles.footer}>{news.description}</div>
        </div>
    );
}

export default NewsWidget