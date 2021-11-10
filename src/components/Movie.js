import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { addFavourite } from "../redux/favouriteSlice";
import { useLocation } from "react-router";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Movie = (props) => {
  const URL = useLocation().pathname;
  const [movie, setMovie] = useState(props.data);
  // console.log(props.data);
  const { title, poster_path, overview, vote_average, id } = props.data;
  // console.log(id);
  const setVoteClass = (vote) => {
    if (vote > 8) {
      return "green";
    } else if (vote >= "6") {
      return "orange";
    } else {
      return "red";
    }
  };

  const [favouriteSolid, setFavouriteSolid] = useState(false);
  const [isActive, setActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleFavouriteClick = (e) => {
    e.preventDefault();
    setFavouriteSolid(!favouriteSolid);
    // if (favouriteSolid === false) {
    //   quantity > 1 && setQuantity(quantity - 1);
    // } else {
    //   setQuantity(quantity + 1);
    // }
    dispatch(addFavourite({ ...movie, quantity }));
  };
  const handleInfoClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="movie">
      <img
        src={
          poster_path
            ? IMG_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80"
        }
        alt="title"
      />
      <div className="movie-info">
        <div>{title}</div>
        <div className="more" onClick={handleInfoClick}>
          Know More
        </div>
        <div className="favourite" onClick={handleFavouriteClick}>
          {favouriteSolid || URL !== "favourites" ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={farHeart} />
          )}
        </div>
        <span className={`tag ${setVoteClass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className={isActive ? "movie-over-active" : "movie-over"}>
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default Movie;
