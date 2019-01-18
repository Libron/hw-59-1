import React from 'react';
import './Form.css';

const Form = props => {
    return (
    <form className="movie-form" onSubmit={event => props.formSubmitted(event)}>
            <label htmlFor="title">Add movie:</label>
            <input type="text" name="title" id="title" placeholder="Sponge Bob" />
            <button type="submit" className="btn-add">Add</button>
        </form>
    );
};

export default Form;