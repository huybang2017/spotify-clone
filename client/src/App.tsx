import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpotifyLayout from "./layouts/SpotifyLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import LikedSongs from "./pages/LikedSongs";
import AlbumDetail from "./pages/AlbumDetail";
import ArtistDetail from "./pages/ArtistDetail";
import Collection from "./pages/Collection";
import Download from "./pages/Download";
import EpisodeDetail from "./pages/EpisodeDetail";
import GenreDetail from "./pages/GenreDetail";
import PlaylistDetail from "./pages/PlaylistDetail";
import Premium from "./pages/Premium";
import ShowDetail from "./pages/ShowDetail";
import Signup from "./pages/Signup";
import TrackDetail from "./pages/TrackDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotifyLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="library" element={<Library />} />
          <Route path="liked" element={<LikedSongs />} />
          <Route path="collection" element={<Collection />} />
          <Route path="playlist/:id" element={<PlaylistDetail />} />
          <Route path="album/:id" element={<AlbumDetail />} />
          <Route path="artist/:id" element={<ArtistDetail />} />
          <Route path="track/:id" element={<TrackDetail />} />
          <Route path="episode/:id" element={<EpisodeDetail />} />
          <Route path="show/:id" element={<ShowDetail />} />
          <Route path="genre/:id" element={<GenreDetail />} />
          <Route path="premium" element={<Premium />} />
          <Route path="download" element={<Download />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
