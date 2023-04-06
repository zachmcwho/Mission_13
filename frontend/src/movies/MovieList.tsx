import { useEffect, useState } from "react";
import { Movie } from "../types/movies";

function MovieListDb() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h4>Joel Hiltons Movies</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Year</th>
            <th>Rating</th>
            <th>Director</th>
            <th>Edited</th>
            <th>LentTo</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData
            .filter((movie) => movie.edited === "Yes")
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((f) => (
              <tr key={f.movieId}>
                <td>{f.title}</td>
                <td>{f.category}</td>
                <td>{f.year}</td>
                <td>{f.rating}</td>
                <td>{f.director}</td>
                <td>{f.edited}</td>
                <td>{f.lentTo}</td>
                <td>{f.notes}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieListDb;
