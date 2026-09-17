import { Link } from "react-router"
import Container from "./Container"

const Hero = () => {
    return (
        <section
            style={{
                background: "url('/hero_banner.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="h-125 sm:h-175 relative"
        >
            {/* ---- Overlay ---- */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

            <Container className="h-full">
                <div className="h-full relative z-10 flex flex-col items-center justify-center gap-y-5 sm:gap-y-10">
                    <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-[370px] sm:max-w-lg md:max-w-xl lg:max-w-3xl text-center leading-snug">
                        <span className="bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] text-transparent bg-clip-text"> Find Movies </span>
                        You'll Enjoy Without the
                        <span className="bg-linear-to-r from-[#ab8bff] to-[#d6c7ff] text-transparent bg-clip-text"> Hassle</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center">Explore and discover your favorite movies from around the world.</p>

                    <Link to="/movies" className="bg-[#7f4dff] hover:bg-[#6e35ff] active:bg-[#6e35ff] py-3.5 px-5 text-base sm:text-lg md:text-xl font-semibold transition-colors duration-100">
                        Explore Now
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default Hero