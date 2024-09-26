import React from 'react'
import Search from './Search'
import Result from './Result'

export default function Hero({getMovie, searchInput,movieList,moviePoster}) {
    console.log(movieList)
// const heroBackground = {
//     'background':''
// }



  return (
    
    <div
            style={{
                backgroundImage: "url(" + moviePoster + ")",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh', 
            }}
            className='hero'
        >
    <Search getMovie={getMovie} searchInput={searchInput} />
    <Result movieList={movieList}/>
    </div>
  )
}
