import { useState } from "react"
import Container from "../components/Container"
import SearchIcon from "../icons/SearchIcon";

const MoviesPage = () => {
  // States
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Container>
        <h1 className="text-3xl font-bold text-center my-10">All Movies That Matches With Your Interest</h1>

        <div className="bg-[#cecefb0d] w-full max-w-[600px] mx-auto relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search through thousands of movies"
            className="py-4 px-12 outline-none w-full text-[#d6c7ff] placeholder:text-[#d6c7ff]/70"

          />
          <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-6 -translate-x-1/2" />
        </div>
      </Container>
    </div>
  )
}

export default MoviesPage