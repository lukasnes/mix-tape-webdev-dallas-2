import express from "express";
import session from "express-session"
import morgan from "morgan";
import ViteExpress from "vite-express";

import { 
  getPlaylist,
  addPlaylist, 
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
const getApiData = async (req, res) =>{
  const { data } = await axios.get('')
  console.log(data)
  res.status(200).send(data)
}

//
app.get('/api/playlists', getPlaylist)

//Get playlist Songs
app.get("/api/playlistsongs", playlistSong)

//Add PlayList
app.post("/api/addplaylist", addPlaylist)

//Delete Playlist
app.post("/api/deleteplaylist", deletePlayList)
 
app.get("/api/playlistsongs/:id", playlistSong)
  

//Add new Song
app.post("/api/addnewsong", addNewSong)

//Delete Song
app.post("/api/deletesong", deleteSong)

  // //Login
  // app.post("/api/login", login)

  // //Logout
  // app.post("/api/logout", logout)



  ViteExpress.listen(app, port, () =>
  console.log(`Listening on http://localhost:${port}`)
);
