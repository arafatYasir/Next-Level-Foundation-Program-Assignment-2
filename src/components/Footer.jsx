import { Link } from "react-router"
import Container from "./Container"

const links = [
    {
        name: "GitHub",
        url: "https://github.com/arafatYasir/"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100061034877219"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arafatyasir01/"
    },
]

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="py-10 mt-12 bg-[#4c3f9a]/30">
            <Container>
                <div className="flex flex-col items-center justify-center gap-y-3">
                    {/* ---- Logo ---- */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            width={100}
                            height={100}
                            alt="MovieBox Logo"
                            className="size-7 sm:size-9 pointer-events-none"
                            fetchPriority="high"
                        />
                        <span className="text-xl sm:text-2xl font-bold">MovieBox</span>
                    </Link>

                    {/* ---- Social Links ---- */}
                    <ul className="flex gap-x-6">
                        {
                            links.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        className="hover:underline active:underline text-[#ab8bff]"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    {/* ---- Copyright ---- */}
                    <p>© {year} MovieBox. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer