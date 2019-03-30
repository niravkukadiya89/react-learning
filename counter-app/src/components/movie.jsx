import React, { Component } from 'react';
import { getMovies} from '../services/fakeMovieService';

class Movie extends Component {
    state = { 
        movie : getMovies()
     }

    handleDelete = (movies) => {
    const movie = this.state.movie.filter(m => m._id !== movies._id);
    this.setState({movie});
    } 
    render() { 
        return <table className="table">
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Gener</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
                {this.state.movie.map(movie=>
                    <tr key={movie._id}> 
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    }

}
 
export default Movie
;