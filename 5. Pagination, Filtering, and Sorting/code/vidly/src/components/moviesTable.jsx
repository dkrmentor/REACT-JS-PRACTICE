import React, { Component } from "react";
import Like from "./common/like";
import TableBody from "./common/tableBody";
import TableHeader from "./common/tableHeader";

class MoviesTable extends Component {
  // state = {  }
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          liked={movie.liked}
          onClick={() => {
            this.props.onLike(movie);
          }}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => {
            this.props.onDelete(movie);
          }}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        {/* <thead>
        <tr>
          <th onClick={()=>{this.raiseSort("title")}}  scope="col">Title</th>
          <th onClick={()=>{this.raiseSort("genre.name")}}  scope="col">Genre</th>
          <th onClick={()=>{this.raiseSort("numberInStock")}}  scope="col">Stock</th>
          <th onClick={()=>{this.raiseSort("dailyRentalRate")}}  scope="col">Rate</th>
          <th></th>
        </tr>
      </thead> */}

        <TableBody data={movies} columns={this.columns} />
        {/* 
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => {
                    onLike(movie);
                  }}
                />
              </td>
              <td>
                <button
                  onClick={() => {
                    onDelete(movie);
                  }}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    );
  }
}

export default MoviesTable;
