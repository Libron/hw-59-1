import React from 'react';

const Movie = props => {
    return (
        <li>
            <input type="text" name="movie" value={props.title} onChange={props.changeTitle}/>
            <button onClick={props.removeMovie}>remove</button>
        </li>
    );
};

export default Movie;