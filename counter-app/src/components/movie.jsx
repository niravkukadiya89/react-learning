import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { Paginator } from "./utils/paginator";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";
class Movie extends Component {
  state = {
    movie: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movie: getMovies(), genres: getGenres() });
  }

  onGenresSelect = genre => {
    console.log(genre);
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
    console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movie;
    const { pageSize, currentPage, movie: AllMovies, genres } = this.state;

    if (count === 0) return <p>There are no movie in the database.</p>;

    const movie = Paginator(AllMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup items={genres} onItemSelect={this.onGenresSelect} />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <table className="table">
            <tbody>
              <tr>
                <th>Title</th>
                <th>Gener</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
              {movie.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            ItemsCount={count}
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
