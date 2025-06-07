// import styles from './Movie.module.css';
import styled from "styled-components";
import Media from "../Media";
import Form from "../Form";

const StyledMovie = styled.div `
margin-bottom: 1rem;
img{
border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
}
h3{
margin-bottom: 0.5rem;
    font-size: 1.95rem;
    color: #4361ee;
}
p{
color: #4631ee;
}

/* Medium Screen */
  @media (min-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  
  /* Large Screen */
  @media (min-width: 992px) {
      max-width: 1200px;
      margin: 3rem auto;
      flex-basis: 25%;
      padding: 1rem;
    }
    `;

function Movie(props){

    const { movie } = props;
    const tmbdImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
    const year = movie.year || movie.release_date; 

    return(
        <StyledMovie>
            <img src={movie.poster || tmbdImage }
            alt={movie.title} 
            />
            <h3>{movie.title}</h3>
            <p>{year}</p>
        </StyledMovie>
    )
}

export default Movie;