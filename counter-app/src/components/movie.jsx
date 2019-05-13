import React, { Component } from "react";

import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { Paginator } from "./utils/paginator";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";

class Movie extends Component {
  state = {
    movie: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenres: []
  };

  componentDidMount() {
    const genres = [{ name: "All Movies" }, ...getGenres()];
    this.setState({ movie: getMovies(), genres });
  }

  onGenresSelect = genre => {
    this.setState({ selectedGenres: genre, currentPage: 1 });
  };

  handleLike = movie => {
    let movies = [...this.state.movie];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = movies => {
    const movie = this.state.movie.filter(m => m._id !== movies._id);
    this.setState({ movie });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = path => {
    console.log(path);
  };

  render() {
    const { length: count } = this.state.movie;
    const {
      pageSize,
      currentPage,
      movie: AllMovies,
      genres,
      selectedGenres
    } = this.state;

    if (count === 0) return <p>There are no movie in the database.</p>;

    const filtered =
      selectedGenres && selectedGenres._id
        ? AllMovies.filter(m => m.genre._id === selectedGenres._id)
        : AllMovies;

    const movie = Paginator(filtered, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={this.state.selectedGenres}
            onItemSelect={this.onGenresSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filtered.length} movies in the database.</p>
          <MoviesTable
            movie={movie}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            ItemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
