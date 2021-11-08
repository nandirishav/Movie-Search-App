import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Movie from "./components/Movie";
import MovieListing from "./components/MovieListing";
import { addMovies } from "./redux/movieSlice";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  // const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addMovies(data.results));
        // setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <div className="title">Movies App</div>
        <div className="right">
          <div className="favourite-page-navItem">Favourites</div>
          <form onSubmit={handleOnSubmit}>
            <input
              className="search"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </div>
      </header>
      <MovieListing />
    </>
  );
}

export default App;
