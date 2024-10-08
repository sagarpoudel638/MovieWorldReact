
import Hero from '../components/Hero'
import SavedMovies from '../components/SavedMovies'
import Title from '../components/Title'
import './App.css'
import React, { useRef, useState } from "react";
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faArrowRight, faMagnifyingGlass, faClock, faHeart} from '@fortawesome/free-solid-svg-icons';
library.add( faTrash, faArrowRight, faMagnifyingGlass, faClock, faHeart)


function App() {
  
  let [movieObj, setMovieObj] = useState([]);

  const searchInput = useRef("");
  const apiKEY = import.meta.env.VITE_APIKEY;

  async function getMovie(query) {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKEY}&t=${query}`
      );
      console.log(response);
      let tempMovieList = [{
        title: response.data.Title,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
        poster: response.data.Poster,
        type: "watchlater",
      }];
      
      setMovieObj(tempMovieList);

      console.log(tempMovieList);
    } catch (error) {
      console.error(error);
    }
    
  }
  return (
    <>
     <Title/>
     <Hero getMovie={getMovie} searchInput={searchInput} movieObj={movieObj} moviePoster={movieObj[0]?movieObj[0].poster:""}/> 
     <SavedMovies movieObj={movieObj}/>
    </>
  )
}

export default App
