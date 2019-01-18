import React from 'react';
import './Form.css';

const Form = props => {
    return (
    <form className="movie-form" onSubmit={event => props.formSubmitted(event)}>
            <label htmlFor="text">Add movie:
            <input type="text" name="text"/></label>
            <button type="submitaaa">Add</button>
        </form>
    );
};

export default Form;