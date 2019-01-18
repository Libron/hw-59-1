import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form/Form";
import Movies from "./components/Movies/Movies";

class App extends Component {
    state = {
      movies: [
          {title: 'Watch Dog', id: 123},
          {title: 'Termintar', id: 245},
          {title: 'Ubit billa', id: 255},
          {title: 'spongeBobo', id: 566}
      ]
    };

    addMovie = event => {
        event.preventDefault();
        console.log('Hello');
    };

    changeMovieTitle = (event, id) => {
      const movies = [...this.state.movies];
      const targetIndex = movies.findIndex(movie => movie.id === id);
      const targetMovie = {...movies[targetIndex]};
      targetMovie.title = event.target.value;
      movies[targetIndex] = targetMovie;
      this.setState({movies});
    };

    removeMovie = id => {
        const movies = [...this.state.movies];
        const targetIndex = movies.findIndex(movie => movie.id === id);
        movies.splice(targetIndex, 1);
        this.setState({movies});
    };

  render() {
    return (
      <div className="App">
        <Form formSubmitted={event => this.addMovie(event)}/>
          <Movies
              list={this.state.movies}
              changeTitle={this.changeMovieTitle}
              removeMovie={this.removeMovie}
          />
      </div>
    );
  }
}

export default App;
