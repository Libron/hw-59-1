import React, {Component} from 'react';

class Movie extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.title !== this.props.title;
    };

    render() {
        return (
            <li className="movie-item">
                <input type="text" name="movie" value={this.props.title} onChange={this.props.changeTitle}/>
                <button onClick={this.props.removeMovie}>remove</button>
            </li>
        );
    }
}

export default Movie;