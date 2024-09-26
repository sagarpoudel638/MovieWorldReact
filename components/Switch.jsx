import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Switch() {
  return (
    <div
      className="btn-group switch"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="all"
        autoComplete="off"
        
      />
      <label className="btn btn-outline-primary" for="all">
        ALL
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="Watchlater"
        autoComplete="off"
      />
      <label className="btn btn-outline-warning" for="Watchlater">
        Watch Later <FontAwesomeIcon icon="fa-solid fa-clock" />
      </label>

      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="Liked"
        autoComplete="off"
      />
      <label className="btn btn-outline-danger" for="Liked">
        Liked <FontAwesomeIcon icon="fa-solid fa-heart" />
      </label>
    </div>
  );
}
