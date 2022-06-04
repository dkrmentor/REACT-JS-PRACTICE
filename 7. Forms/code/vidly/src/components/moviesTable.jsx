import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";


class MoviesTable extends Component {
  // state = {  }
  columns = [
    { path: "title", label: "Title" , content: (movie) => (
      <Link to={`/movies/${movie._id}`}>{movie.title} </Link>)},

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
    const { movies, sortColumn, onSort } = this.props;

    return (
    <Table data={movies} sortColumn={sortColumn} onSort={onSort} columns={this.columns} />
    );
  }
}

export default MoviesTable;
