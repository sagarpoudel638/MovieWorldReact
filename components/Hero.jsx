import React from 'react'
import Search from './Search'
import Result from './Result'

export default function Hero({getMovie, searchInput,movieObj,moviePoster}) {
    console.log(movieObj)
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
    <Result movieObj={movieObj}/>
    </div>
  )
}
