import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import RootLayout from "./layouts/RootLayout"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App