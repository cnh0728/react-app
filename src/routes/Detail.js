import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import DetailComponent from "../components/DetailComponent.js"

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const {id}= useParams();

    const getMovie = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        // console.log(json.data.movie);
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    return (
    <div className={styles.container}>
        {loading ? (        
        <div className={styles.loader}>
            <span>Loading...</span>
        </div>
        ) : (
            <div className={styles.movie}>
                <DetailComponent
                    year={movie.year}
                    description={movie.description_full}
                    download_count={movie.download_count}
                    genres={movie.genres}
                    language={movie.language}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}/>
            </div>
        ) }
    </div>
    );
}
export default Detail;