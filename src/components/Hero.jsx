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
            className="h-[700px] relative"
        >
            {/* ---- Overlay ---- */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

            <Container className="h-full">
                <div className="h-full relative z-10 flex flex-col items-center justify-center gap-y-10">
                    <h1 className="text-6xl font-bold max-w-3xl text-center leading-snug">
                        <span className="bg-linear-to-r from-[#d6c7ff] to-[#ab8bff] text-transparent bg-clip-text"> Find Movies </span>
                        You'll Enjoy Without the
                        <span className="bg-linear-to-r from-[#ab8bff] to-[#d6c7ff] text-transparent bg-clip-text"> Hassle</span>
                    </h1>
                    <p className="text-2xl font-medium text-center">Explore and discover your favorite movies from around the world.</p>

                    <Link to="/movies" className="bg-[#7f4dff] py-4 px-5 text-xl font-semibold">
                        Explore Now
                    </Link>
                </div>
            </Container>
        </section>
    )
}

export default Hero