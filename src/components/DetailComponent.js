import PropTypes from "prop-types";
import styles from "./DetailComponent.module.css";

function DetailComponent({year, description, download_count, genres, language, coverImg, title}){
    return(
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img}/>
        <div>
            <h2 className={styles.movie__title}>{title}({year})</h2>
            <p>{description}</p>
            <h3 className={styles.movie__year}>language = "{language}"</h3>
            <h3 className={styles.movie__year}>downloads = {download_count}</h3>
            <ul className={styles.movie__genres}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}

DetailComponent.propTypes={
    year: PropTypes.number.isRequired,
    download_count: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DetailComponent;