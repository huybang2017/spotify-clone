import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotifyLayout from "./layouts/SpotifyLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import LikedSongs from "./pages/LikedSongs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotifyLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="liked" element={<LikedSongs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
