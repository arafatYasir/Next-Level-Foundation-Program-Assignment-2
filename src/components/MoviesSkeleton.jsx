const MoviesSkeleton = ({ count = 20 }) => {
    const items = Array.from({ length: count });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-5 mt-10 justify-items-center">
            {items.map((_, idx) => (
                <div key={idx} className="w-full max-w-[320px] h-135 rounded-lg animate-pulse bg-[#767676]" />
            ))}
        </div>
    )
}

export default MoviesSkeleton