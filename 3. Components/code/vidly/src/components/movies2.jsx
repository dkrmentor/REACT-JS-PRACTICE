import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies2 extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete=(e)=>{
    //   console.log(e)

      const mov = this.state.movies.filter((m)=>m._id!==e._id)
      this.setState({movies:mov})

  }

  render() {

const {length : count} =this.state.movies;
if(count===0) return "no movies"

    return (
      <>

      <p>
          you have {count} movies
      </p>
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
              {this.state.movies.map((movie)=>
              
              <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td><button onClick={()=>{this.handleDelete(movie)}} className="btn btn-danger btn-sm" >Delete</button></td>
            </tr>
              
              
              
              )}
          


           
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies2;
