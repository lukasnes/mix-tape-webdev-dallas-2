import express from "express";
import session from "express-session"
import morgan from "morgan";
import ViteExpress from "vite-express";
import axios from 'axios'


import { 
  getPlaylist,
  addPlaylist, 
  editPlaylist,
  deletePlayList, 
} from "./controllers/playlistController.js";

import { playlistSong, 
    addNewSong, 
    deleteSong } from "./controllers/songController.js";
// import { login, 
//   logout, 
//   loginRequired } from "./controllers/authController.js";

const app = express();
const port = "8000";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

ViteExpress.config({ printViteDevServerHost: true });


//getApiData
app.get('/ApiData', async (req, res) => {
  const response = await axios.get('')
  const data = response.data
  console.log(data)
  res.status(200).json(data)
}
  )


//Get Playlist
app.get('/api/playlists', getPlaylist)

//Add PlayList
app.post("/api/addnewplaylist", addPlaylist)


//Edit Playlist
app.post('api/playlists', editPlaylist)


//Delete Playlist
app.post("/api/deleteplaylist", deletePlayList)
 
app.get("/api/playlistsongs/:id", playlistSong)
  

//Add new Song
app.post("/api/addnewsong", addNewSong)

//Get playlist Songs
app.get("/api/playlistsongs", playlistSong)

//Add new Song
app.post("/api/addnewsong", addNewSong)

//Delete Song
app.post("/api/deletesong/:songId", deleteSong)

  // //Login
  // app.post("/api/login", login)

  // //Logout
  // app.post("/api/logout", logout)



  ViteExpress.listen(app, port, () =>
  console.log(`Listening on http://localhost:${port}`)
);
