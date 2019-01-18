import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form/Form";
import Movies from "./components/Movies/Movies";

class App extends Component {
    static dbName = 'MovieDB ';

    state = {
      movies: []
    };

    constructor(props) {
        super(props);
        this.storage = this.initStorage();
    };

    componentDidMount() {
        this.setState({movies: this.storage});
    };

    componentDidUpdate() {
      this.updateStorage();
    };

    addMovieHandler = event => {
        event.preventDefault();

        const userInput = document.getElementById('title').value;
        if (userInput) {
            const movies = [...this.state.movies];
            const uniqueID = this.getUniqueID();
            movies.push({title: userInput, id: uniqueID});
            this.setState({movies});
        }
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

    getUniqueID = () => (Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 101));

    initStorage = () => {
        if (localStorage.getItem(App.dbName) === null) {
            localStorage.setItem(App.dbName, '[]');
            return [];
        } else {
            const data = localStorage.getItem(App.dbName);
            return JSON.parse(data);
        }
    };

    updateStorage = () => {
        let movies = this.state.movies;
        localStorage.setItem(App.dbName, JSON.stringify(movies));
    };

  render() {
    return (
      <div className="App">
        <Form formSubmitted={event => this.addMovieHandler(event)}/>
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
