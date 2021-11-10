import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addMovies } from "../redux/movieSlice";

//material ui
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const Header = () => {
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

  const quantity = useSelector((state) => state.favourite.quantity);
  // console.log(quantity);
  return (
    <header>
      <Link to="/">
        <div className="title">Movies App</div>
      </Link>
      <div className="right">
        <Link className="fav-icon" to="/favourites">
          {/* <div className="favourite-page-navItem">Favourites</div> */}
          <Badge badgeContent={quantity} color="primary">
            <FavoriteIcon />
          </Badge>
        </Link>
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
  );
};

export default Header;
