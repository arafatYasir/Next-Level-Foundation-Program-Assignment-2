import { useEffect } from "react";
import Hero from "../components/Hero"

const HomePage = () => {
    // Scroll to the top of the page on the first render
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    return (
        <>
            <Hero />
        </>
    )
}

export default HomePage