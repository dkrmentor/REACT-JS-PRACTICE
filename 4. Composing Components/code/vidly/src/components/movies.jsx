import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (mov) => {
    //  console.log(mov)
    const movi = this.state.movies.filter((m) => m._id !== mov._id);
    this.setState({ movies: movi });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return "There are no movies in the db";
    return (
      <>
        {/* <h4>movies</h4>
            <ul>                
        {this.state.movies.map((mov) => (          
          <li>{mov.title}</li>          
        ))}
      </ul> */}
        <p>Showing {count} movies in the db</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((mov) => (
              <tr key={mov._id}>
                <td>{mov.title}</td>
                <td>{mov.genre.name}</td>
                <td>{mov.numberInStock}</td>
                <td>{mov.dailyRentalRate}</td>

                <td>
                  <button
                    onClick={() => {
                      this.handleDelete(mov);
                    }}
                    className="btn btn-danger btn=sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
