import React from "react";

function Buscador() {
  return (
    <form
      action="/search-results"
      method="GET"
      className="buscadorContainer"
    >
      <input
        className="buscador"
        type="text"
        name="busqueda"
        placeholder="  Search movies, series..."
      />
      <button type="submit" className="lupa">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
}

export default Buscador;