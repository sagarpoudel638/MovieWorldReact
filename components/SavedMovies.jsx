import React from 'react'
import Switch from './Switch'
import MovieList from './MovieList'

export default function SavedMovies({movieList}) {
  return (
    <div
    style={{
       backgroundColor:'grey',
        height: '100vh', 
    }}
    className='savedmovies'
>
   <Switch/>
   <MovieList movieList={movieList}/>
   </div>
  )
}
