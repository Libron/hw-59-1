import React from 'react';
import './Form.css';

const Form = props => {
    return (
    <form className="movie-form" onSubmit={event => props.formSubmitted(event)}>
            <label htmlFor="title">Add movie:
            <input type="text" name="title" id="title"/></label>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;