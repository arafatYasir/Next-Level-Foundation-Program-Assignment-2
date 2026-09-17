import { useEffect, useState } from "react";
import StarIcon from "../icons/StarIcon";
import MovieDetailsModal from "./MovieDetailsModal";

const MovieCard = ({ movie }) => {
    // States
    const [showDetails, setShowDetails] = useState(false);

    // Variables
    const { name, image, language, premiered, rating, genres } = movie;
    const releaseYear = new Date(premiered).getFullYear();
    const allGenres = genres.join(", ");

    // Stop scroll bar when modal is open
    useEffect(() => {
        if (showDetails) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "unset";
        }

        return () => document.body.style.overflow = "hidden";
    }, [showDetails]);

    return (
        <div className="w-full max-w-[320px] p-4 rounded-lg bg-[#0f0d23] border border-white/40 space-y-2">
            {/* ---- Poster ---- */}
            {
                image ? (
                    <img
                        src={image?.medium ?? image.original}
                        alt={`Poster of ${name}`}
                        width={210}
                        height={295}
                        className="w-full rounded-lg"
                        loading="lazy"
                    />
                ) : (
                    <img
                        src="/no_movie.png"
                        alt={`Poster of ${name}`}
                        width={210}
                        height={295}
                        className="w-full rounded-lg"
                        loading="lazy"
                    />
                )
            }

            {/* ---- Name ---- */}
            <h4 className="text-lg font-bold">{name}</h4>

            {/* ---- Rating, Language & Premiere Date ---- */}
            <p className="flex items-center gap-x-2">
                <span className="flex items-center gap-x-1">
                    <StarIcon />
                    <span className="font-bold">
                        {rating.average}
                    </span>
                </span>

                <span>•</span>

                <span className="font-bold">{language}</span>

                <span>•</span>

                <span>{releaseYear}</span>
            </p>

            {/* ---- Genres ---- */}
            <p>
                <span className="font-bold">Genres:</span>
                <span className="italic"> {allGenres}</span>
            </p>

            {/* ---- Button ---- */}
            <button
                className="cursor-pointer border border-[#7f4dff] hover:bg-[#6e35ff] active:bg-[#6e35ff] py-1 w-full text-base sm:text-lg md:text-xl font-semibold transition-colors duration-100"
                onClick={() => setShowDetails(true)}
            >
                See Details
            </button>

            {/* ---- Movie Details Modal ---- */}
            {showDetails && <MovieDetailsModal movie={movie} onClose={() => setShowDetails(false)} />}
        </div>
    )
}

export default MovieCard