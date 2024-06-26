import React, { useState, useEffect } from "react";
import {genres} from "../../assets/data/genres";
import styles from "./GenrePage.module.css";
import { IoWarning } from "react-icons/io5";

export function GenrePage() {

    const bgColors = ["#FF5209", "#D7A4FF", "#148A08", "#84C2FF", "#902500", "#7358FF", "#FF4ADE", "#E61E32", "#6CD061"];

    const [selectedGenres, setSelectedGenres] = useState([]);
    const [warning, setWarning] = useState(false);

    // useEffect -> 1) component mounting
    //              2) state change
    //              3) component unmounting   
    useEffect(() => {
        if (selectedGenres.length >= 3) {
            setWarning(false);
        }
        localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
        console.log(localStorage.getItem("selectedGenres"));
    }, [selectedGenres]);

    const removeGenre = (index) => {
        // console.log(index);
        const newGenre = selectedGenres.filter((item) => item !== index);
        setSelectedGenres(newGenre);
    };

    const selectGenre = (index) => {
        if (selectedGenres.includes(index)) return;
        setSelectedGenres([...selectedGenres, index]);
    };

    const handleNext = () => {
        if (selectedGenres.length < 3) {
            setWarning(true);
        } else {
            setWarning(false);
        }
    };

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