import React, { useState } from "react";
import actionImg from "../../assets/action.png"
import styles from "./GenrePage.module.css"

function GenrePage() {
    const [genres, setGenres] = useState([
        {
            title: "Action",
            bgImage: actionImg,
        },
        {
            title: "Drama",
            bgImage: "",
        },
        {
            title: "Romance",
            bgImage: "",
        },
        {
            title: "Thriller",
            bgImage: "",
        },
        {
            title: "Western",
            bgImage: "",
        },
        {
            title: "Horror",
            bgImage: "",
        },
        {
            title: "Fantasy",
            bgImage: "",
        },
        {
            title: "Music",
            bgImage: "",
        },
        {
            title: "Fiction",
            bgImage: "",
        },
    ]);
    const [selectedGenres, setSelectedGenres] = useState([1, 3, 5]);

    const removeGenre = (index) => {
        // console.log(index);
        const newGenre = selectedGenres.filter((item) => item !== index);
    };

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <h2>Super app</h2>
                <h3>Choose your entertainment category</h3>
                <div className={styles.selected}>
                    {selectedGenres.map((item) => (
                        <div key={item} className={styles.selectedGenre}>
                            {genres[item].title}
                            <button onClick={() => removeGenre(item)}>X</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.right}></div>
        </div>
    );
}

export default GenrePage