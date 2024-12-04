import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import UnderNav from "./components/UnderNav";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import MoviesDetails from "./components/MoviesDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <UnderNav />
        <Routes>
          <Route path="/TvShows" element={<TvShows />} />
          <Route path="/TvShows/MoviesDetails/:movie.imbdID" element={<MoviesDetails />} />
        </Routes>
      </BrowserRouter>

      {/* <Gallery />
      <GalleryOne />
      <GalleryTwo /> */}
      <MyFooter />
    </>
  );
}

export default App;
