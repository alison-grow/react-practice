import React from 'react'


function MovieCard ({title, type, posterURL}) {
    return(
        <div className="movie-card">
            <img className="movie-card-image" src={posterURL} alt="" />
            the data {titel} {type} {posterURL}
        </div>
    );
}

export default MovieCard;
