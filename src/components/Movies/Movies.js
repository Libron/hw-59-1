import React, {Fragment} from 'react';
import './Movies.css';
import Movie from "./Movie/Movie";

const Movies = props => {
    return (
        <Fragment>
            <h2>The watch list:</h2>
            <ul className="movies-list">
                {props.list.map(movie=>(
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        changeTitle={event => props.changeTitle(event, movie.id)}
                        removeMovie={() => props.removeMovie(movie.id)}
                    />
                ))}
            </ul>
        </Fragment>
    );
};

export default Movies;