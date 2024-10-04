import React from "react";
import Search from "./Search";
import Result from "./Result";
import { useEffect } from "react";
import { getMovie } from "../src/Axios";

export default function Hero({ getMovie, searchInput, movieObj, moviePoster }) {
  console.log(movieObj);
  useEffect(() => {
    getMovie();

    return () => {
      ;
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url(" + moviePoster + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="hero"
    >
      <Search getMovie={getMovie} searchInput={searchInput} />
      <Result movieObj={movieObj} />
    </div>
  );
}
