import { Link, NavLink } from "react-router"
import Container from "./Container"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-100 w-full bg-[#4c3f9a]/40 border-b border-b-white/40 backdrop-blur-sm">
            <Container>
                <nav className="flex items-center justify-between py-3">
                    {/* ---- Logo ---- */}
                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            width={100}
                            height={100}
                            alt="MovieBox Logo"
                            className="size-7 sm:size-9 pointer-events-none"
                            fetchPriority="high"
                        />
                        <span className="text-xl sm:text-2xl font-bold">MovieBox</span>
                    </NavLink>

                    <Link to="/movies" className="text-lg sm:text-xl hover:text-[#ab8bff] active:text-[#ab8bff] transition-colors duration-100">All Movies</Link>
                </nav>
            </Container>
        </header>
    )
}

export default Navbar