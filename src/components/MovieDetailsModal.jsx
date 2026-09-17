import { useEffect, useRef } from "react";
import CloseIcon from "../icons/CloseIcon"
import StarIcon from "../icons/StarIcon";
import CalendarIcon from "../icons/CalendarIcon"

const MovieDetailsModal = ({ movie, onClose }) => {
    // Hooks
    const modalRef = useRef(null);

    const { name, image, language, premiered, rating, genres, type, summary } = movie;
    const releaseYear = new Date(premiered).getFullYear();
    const allGenres = genres.join(", ");

    useEffect(() => {
        const handleCloseModal = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleCloseModal);

        return () => document.removeEventListener("mousedown", handleCloseModal);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center">
            <div ref={modalRef} className="relative bg-[#101010] p-6 sm:p-8 md:p-10 w-[90vw] max-w-[468px] sm:max-w-[484px] md:max-w-[500px] lg:max-w-4xl max-h-[80vh] overflow-y-auto rounded-lg">
                {/* ---- Close Icon ---- */}
                <button
                    className="size-5 sm:size-7 md:size-8 flex items-center justify-center border rounded-full cursor-pointer hover:bg-white/50 active:bg-white/50 absolute top-1 right-1 sm:top-2 sm:right-2"
                    onClick={() => onClose()}
                >
                    <CloseIcon />
                </button>

                {/* ---- Poster & Details ---- */}
                <div className="flex flex-col lg:flex-row gap-y-5 gap-x-10">
                    <div className="shrink-0">
                        {/* ---- Poster ---- */}
                        {
                            image ? (
                                <img
                                    src={image?.medium ?? image.original}
                                    alt={`Poster of ${name}`}
                                    width={210}
                                    height={295}
                                    className="w-full max-w-[420px] lg:h-[590px] rounded-lg"
                                    loading="lazy"
                                />
                            ) : (
                                <img
                                    src="/no_movie.png"
                                    alt={`Poster of ${name}`}
                                    width={210}
                                    height={295}
                                    className="w-full max-w-[420px] lg:h-[590px] rounded-lg"
                                    loading="lazy"
                                />
                            )
                        }
                    </div>

                    {/* ---- Other Details ---- */}
                    <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-bold">{name}</h3>

                        <p className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 text-base sm:text-xl">
                            <span className="flex items-center gap-x-1">
                                <StarIcon width={20} height={20} />
                                <span className="font-bold">
                                    {rating.average || "N/A"}
                                </span>
                            </span>

                            <span>•</span>

                            <span className="font-bold">{language}</span>

                            <span>•</span>

                            <span className="flex items-center gap-x-1">
                                <CalendarIcon width={20} height={20} />
                                <span className="font-bold">
                                    {releaseYear}
                                </span>
                            </span>
                        </p>

                        {
                            allGenres.trim() !== "" && (
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold">Genres</h4>
                                    <p className="text-base sm:text-lg">{allGenres}</p>
                                </div>
                            )
                        }

                        <div>
                            <h4 className="text-base sm:text-lg font-bold">Type</h4>
                            <p className="text-base sm:text-lg">{type}</p>
                        </div>

                        <div>
                            <h4 className="text-base sm:text-lg font-bold">Summary</h4>
                            <p className="text-base sm:text-lg max-w-[420px]">{summary}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetailsModal