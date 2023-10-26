import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Songs from "./Pages/Songs/Songs.jsx";
import Playlist from "./Pages/Playlist/Playlist.jsx";
import Root from "./Root.jsx";
import axios from "axios";
import FriendList from "./Components/FriendList/FriendList.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={<Playlist />}
        loader={async () => {
          let res = await axios.get("/api/likes/top");
          
          return {
            playlists: res.data,
          };
        }}
      />
      <Route
        path="playlist/:id"
        element={<Songs />}
        loader={async ({ params }) => {
          let res = await axios.get(`/api/playlistsongs/${params.id}`);
          return {
            playlist: res.data,
          };
        }}
      />

      <Route path="style" />
    </Route>
  )
);

export default router;
