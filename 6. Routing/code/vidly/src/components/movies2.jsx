import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { paginate } from "./utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies2 extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres: genres });
  }

  handleDelete = (e) => {
    //   console.log(e)

    const mov = this.state.movies.filter((m) => m._id !== e._id);
    this.setState({ movies: mov });
  };
  handleLiked = (movie) => {
    const mov = [...this.state.movies];

    const i = mov.indexOf(movie);
    // mov[i]={... mov[i]}

    mov[i].liked = !mov[i].liked;
    this.setState({ movies: mov });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genres) => {
    this.setState({ selectedGenre: genres, currentPage: 1 });
    // console.log( genres)
  };
  handleSort = (sortColumn) => {
    // console.log(path)
    // const sortColumn ={ path: path, order: "asc" } ;

    this.setState({ sortColumn: sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      movies: AllMovies,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? AllMovies.filter((m) => m.genre._id === selectedGenre._id)
        : AllMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { length: count } = this.state.movies;

    const { pageSize, currentPage, sortColumn } = this.state;
    if (count === 0) return "no movies";
    const { totalCount, data: movies } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <p>you have {totalCount} movies</p>
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLiked}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

          <Pagination
            itemCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies2;
