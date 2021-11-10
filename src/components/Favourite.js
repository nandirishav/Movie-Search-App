import React from "react";
import { useSelector } from "react-redux";
import { getAllFavMovies } from "../redux/favouriteSlice";
import Movie from "./Movie";

const Favourite = () => {
  const favMovies = useSelector((state) => state.favourite.movies);
  return (
    <>
      <h2>Favourites Page</h2>
      <div className="container">
        {favMovies.length > 0 ? (
          favMovies.map((movie, index) => {
            //   console.log(movie);
            return <Movie key={movie.id} data={movie} />;
          })
        ) : (
          <div className="error">
            <h3>
              There has been some error in displaying your favourite movies
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Favourite;
