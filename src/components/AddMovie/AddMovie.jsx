import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./Addmovie.module.css";
import Movies from "../Movies/Movies";

function AddMovieForm({ movies, setMovies }) {
    const [inputs, setInputs] = useState({
        title: "",
        date: ""
    });

    const [formErrors, setFormErrors] = useState({
        title: false,
        date: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const isFormValid = () => {
        const foundErrors = {
            title: inputs.title.trim() === "",
            date: inputs.date.trim() === ""
        };

        setFormErrors(foundErrors);

        return !foundErrors.title && !foundErrors.date;
    };

    const saveMovie = () => {
        const newMovie = {
            id: crypto.randomUUID(),
            title: inputs.title,
            year: inputs.date,
            type: "Movie",
            poster: "https://picsum.photos/200/300?grayscale"
        };

        setMovies([...movies, newMovie]);

        // Reset input dan error
        setInputs({ title: "", date: "" });
        setFormErrors({ title: false, date: false });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            saveMovie();
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler}>
                <input
                    className={styles.input_form}
                    type="text"
                    name="title"
                    value={inputs.title}
                    onChange={handleInputChange}
                    placeholder="Masukkan Judul Film"
                />
                {formErrors.title && <Alert>Judul tidak boleh kosong</Alert>}

                <input
                    className={styles.input_form}
                    type="text"
                    name="date"
                    value={inputs.date}
                    onChange={handleInputChange}
                    placeholder="Masukkan Tahun Rilis"
                />
                {formErrors.date && <Alert>Tanggal tidak boleh kosong</Alert>}

                <button className={styles.button_form}>Tambah Film</button>
            </form>
        </div>
    );
}

export default AddMovieForm;