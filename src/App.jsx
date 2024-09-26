
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
  
  let [movieList, setmovieList] = useState([]);

  const searchInput = useRef("");

  async function getMovie(query) {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=6607632a&t=${query}`
      );
      console.log(response);
      let tempMovieList = [{
        title: response.data.Title,
        imdb: response.data.imdbRating,
        plot: response.data.Plot,
        poster: response.data.Poster,
        type: "watchlater",
      }];
      
      setmovieList(tempMovieList);

      console.log(tempMovieList);
    } catch (error) {
      console.error(error);
    }
    
  }
  return (
    <>
     <Title/>
     <Hero getMovie={getMovie} searchInput={searchInput} movieList={movieList} moviePoster={movieList[0]?movieList[0].poster:""}/> 
     <SavedMovies movieList={movieList}/>
    </>
  )
}

export default App
