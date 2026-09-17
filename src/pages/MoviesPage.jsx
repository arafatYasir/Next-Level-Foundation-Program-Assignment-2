import { useEffect, useState } from "react"
import Container from "../components/Container"
import SearchIcon from "../icons/SearchIcon";
import MovieCard from "../components/MovieCard";

const MoviesPage = () => {
  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(40);

  // Fetch the movies on first render
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}`);

        if (!res.ok) {
          throw new Error("Failed to load all movies");
        }

        const data = await res.json();
        // Set movies to state
        setMovies(data);
      }
      catch (e) {
        console.log(e);
        setError(e.message);
      }
      finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <Container>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center my-10">All Movies That Matches With Your Interest</h1>

        <div className="bg-[#cecefb0d] w-full max-w-[600px] mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search through thousands of movies"
            className="py-4 px-12 outline-none w-full text-sm sm:text-base text-[#d6c7ff] placeholder:text-[#d6c7ff]/70"
          />
          <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-6 -translate-x-1/2" />
        </div>

        {/* ---- Loading State ---- */}
        {
          loading && <p>Loading Movies....</p>
        }

        {/* ---- Error State ---- */}
        {
          (!loading && error) && (
            <p className="text-xl text-red-500 text-center mt-5">Error: {error}</p>
          )
        }

        {/* ---- All Movies ---- */}
        {
          (!loading && !error && movies && movies.length > 0) ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5 mt-10 justify-items-center">
                {
                  movies.slice(0, limit).map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                }
              </div>

              {/* ---- Show More Btn ---- */}
              <div className="text-center mt-10">
                <button
                  className="cursor-pointer border-2 border-[#7f4dff] hover:bg-[#6e35ff] active:bg-[#6e35ff] py-3.5 px-5 text-base sm:text-lg md:text-xl font-semibold transition-colors duration-100"
                  onClick={() => setLimit(prev => prev + 40)}
                >
                  See More
                </button>
              </div>
            </>
          ) : (
            <div className="text-center mt-10 space-y-2">
              <h2 className="text-2xl font-semibold">We couldn't find any movies</h2>
              <p className="text-lg">It doesn't normally occur. Try refreshing the page or search for something else.</p>
            </div>
          )
        }
      </Container>
    </div>
  )
}

export default MoviesPage