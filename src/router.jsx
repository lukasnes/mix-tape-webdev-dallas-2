import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Songs from "./Pages/Songs.jsx";
import Playlist from "./Pages/Playlist.jsx";
import Root from "./Root.jsx";
import axios from "axios";

let router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element= {<Root/>}>
           <Route index element={<Playlist/>} loader={async () => {
            let res = await axios.get("/api/playlists")
            return {
                playlists: res.data
            }
           }}/> 
           <Route path="playlist/:id"/>
        </Route>
    )
)

export default router;