import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotifyLayout from "./layouts/SpotifyLayout";
import Home from "./pages/Home";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import AlbumDetail from "./pages/AlbumDetail";
import ArtistDetail from "./pages/ArtistDetail";
import Collection from "./pages/Collection";
import GenreDetail from "./pages/GenreDetail";
import PlaylistDetail from "./pages/PlaylistDetail";
import Signup from "./pages/Signup";
import { Lyric } from "./pages/Lyric";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotifyLayout />}>
          <Route index element={<Home />} />
          <Route path="library" element={<Library />} />
          <Route path="collection" element={<Collection />} />
          <Route path="playlist/:id" element={<PlaylistDetail />} />
          <Route path="album/:id" element={<AlbumDetail />} />
          <Route path="artist/:id" element={<ArtistDetail />} />
          <Route path="lyric/:id" element={<Lyric />} />
          <Route path="genre/:id" element={<GenreDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
