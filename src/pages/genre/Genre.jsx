import React, { useState } from "react";
import actionImg from "../../assets/action.png"
import styles from "./GenrePage.module.css"
import { IoWarning } from "react-icons/io5";

function GenrePage() {
    const genres = [
        {
            title: "Action",
            bgImage: actionImg,
        },
        {
            title: "Drama",
            bgImage: actionImg,
        },
        {
            title: "Romance",
            bgImage: actionImg,
        },
        {
            title: "Thriller",
            bgImage: actionImg,
        },
        {
            title: "Western",
            bgImage: actionImg,
        },
        {
            title: "Horror",
            bgImage: actionImg,
        },
        {
            title: "Fantasy",
            bgImage: actionImg,
        },
        {
            title: "Music",
            bgImage: actionImg,
        },
        {
            title: "Fiction",
            bgImage: actionImg,
        },
    ]

    const bgColors = ["#FF5209", "#D7A4FF", "#148A08", "#84C2FF", "#902500", "#7358FF", "#FF4ADE", "#E61E32", "#6CD061"]

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [warning, setWarning] = useState(false);

    const removeGenre = (index) => {
        // console.log(index);
        const newGenre = selectedGenres.filter((item) => item !== index);
        setSelectedGenres(newGenre);
    };

    const selectGenre = (index) => {
        if (selectedGenres.length === 2) {
            setWarning(false);
        }
        setSelectedGenres([...selectedGenres, index]);
    }

    const handleNext = () => {
        if (selectedGenres.length < 3) {
            setWarning(true);
        } else {
            alert(' to next page');
        }
    }

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <h2>Super app</h2>
                <h1>Choose your <br /> entertainment <br /> category</h1>
                <div className={styles.selected}>
                    {selectedGenres.map((item) => (
                        <div key={item} className={styles.selectedGenre}>
                            {genres[item].title}
                            <button onClick={() => removeGenre(item)}>X</button>
                        </div>
                    ))}
                </div>
                {warning && (
                    <div className={styles.warning}>
                        <IoWarning className={styles.icon} /><div>&nbsp;Minimum 3 category required</div>
                    </div>
                )}
            </div>
            <div className={styles.right}>
                <div className={styles.genreGrid}>
                    {genres.map((genre, index) => (
                        <div key={index}
                            className={styles.genreCard}
                            onClick={() => selectGenre(index)}
                            style={{ backgroundColor: bgColors[index] }}
                        >
                            {genre.title}
                            <img src={genre.bgImage} alt={genre.title} />
                        </div>
                    ))}
                </div>
                <button onClick={handleNext}>Next Page</button>
            </div>
        </div>
    );
}

export default GenrePage