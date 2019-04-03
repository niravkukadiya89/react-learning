import React from "react";
import Like from "./common/like";

const MoviesTable = props => {
  const { movie, OnLike, OnDelete } = props;

  return (
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
              <Like liked={movie.liked} onClick={() => OnLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => OnDelete(movie)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
