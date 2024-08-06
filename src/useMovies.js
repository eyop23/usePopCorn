import { useState, useEffect } from "react";
const KEY = "d0f6fa16";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          // `https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!response.ok)
          throw new Error("Something Were Wrong With fetching movies");
        const data = await response.json();
        if (data.Response === "False") throw new Error("Moive Not found");
        console.log(data.Search);
        setMovies(data.Search);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
        // setIsLoading(false)
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
      // setWatched([])
    }
    // handleCloseMovie();
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);
  return { movies, isLoading, error };
}
