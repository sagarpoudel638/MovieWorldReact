import React from "react";
import poster from '../src/assets/poster.jpg'

export default function Card({movie}) {
    // console.log(movie)
    const handleWatchLater=()=>{
      

    }
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={movie.poster} className="img-fluid rounded-start" alt="Poster" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                <small className="text-body-secondary">{movie.imdb}</small>
              </p>
              <p className="card-text">
                {movie.plot}
              </p>
              
              <button className="btn btn-warning" onClick={handleWatchLater}> Watch Later</button>
              <button className="btn btn-primary">Like</button>
              <button className="btn btn-danger">Delete</button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
