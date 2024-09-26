import React, { useRef, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search({ getMovie, searchInput }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchInput.current.value;
    if (query) {
      getMovie(query);
    }
  };

  return (
    <>
      <form onSubmit={handleSearch}>
        {/* <input
          type="text"
          ref={searchInput}
          placeholder="Search movie by name"
        />
        <button type="submit" classNameName="btn btn-success">
          {" "}
          Search{" "}
        </button> */}

        <div className="input-group mb-3">
          <div className="form-floating col-md-10">
            <input
              type="text"
              id="floatingInput"
              className="form-control col-md-10"
              placeholder="Movie Name"
              ref={searchInput}
              aria-label="Movie Name"
              aria-describedby="button-addon2"
            />
            <label for="floatingInput">Movie Name</label>
          </div>
          <button className="btn btn-success" type="submit" id="button-addon2">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </form>
    </>
  );
}
