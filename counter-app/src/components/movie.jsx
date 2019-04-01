import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";


class Movie extends Component {
  state = {
    movie: getMovies(),
    pageSize : 1
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
  }

  render() {
    const {length : count} = this.state.movie;
    return (
      <React.Fragment>
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
            {this.state.movie.map(movie => (
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

        <Pagination pageItemCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />


      </React.Fragment>

    );
  }
}

export default Movie;
