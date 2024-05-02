import React, { useState, useEffect } from "react";
import styles from "./NotesWidget.module.css";

function NotesWidget() {
    const [note, setNote] = useState();

    useEffect(()=>{
        setNote(localStorage.getItem("note"));
    }, []);

    useEffect(() => {
        if(note){
            localStorage.setItem("note", note);
        }
    }, [note]);

    return (
        <div className={styles.notesWidget}>
            <h1 className={styles.header}>All Notes</h1>
            <textarea className={styles.input}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                cols="62" rows="20"
            />
        </div>
    );
}

export default NotesWidget