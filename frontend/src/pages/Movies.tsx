import React from "react";
import { useState } from "react";
import movieData from "../MovieData.json";

const MDS = movieData.MovieData;

function MovieList() {
  const [listofMovies, setListOfMovies] = useState(MDS);

  const addMovie = () => {
    setListOfMovies([
      ...MDS,
      {
        Category: "Action/Adventure",
        Title: "Avengers, The",
        Year: 2012,
        Director: "Joss Whedon",
        Rating: "PG-13",
        Edited: "No",
      },
    ]);
  };
  return (
    <>
      <div className="App">
        <h3 className="header bold">Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-success table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listofMovies.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button>
    </>
  );
}
export default MovieList;
