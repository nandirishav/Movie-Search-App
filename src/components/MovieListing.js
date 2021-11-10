import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../redux/movieSlice";
import Movie from "./Movie";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  return (
    <>
      <h2>Movies</h2>
      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie, index) => {
            //   console.log(movie);
            return <Movie key={movie.id} data={movie} />;
          })
        ) : (
          <div className="error">
            <h3>There has been some error in displaying the movies</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListing;
