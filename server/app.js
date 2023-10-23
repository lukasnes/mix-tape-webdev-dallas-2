import express from "express";
import session from "express-session"
import morgan from "morgan";
import ViteExpress from "vite-express";
import axios from 'axios'

//user variable that grabs user info 
import { 
  getPlaylist,
  addPlaylist, 
  editPlaylist,
  deletePlayList, 
} from "./controllers/playlistController.js";

import { 
  playlistSong, 
  addNewSong, 
  deleteSong } from "./controllers/songController.js";

  import { getFriendList,
   } from "./controllers/friendlistController.js";

import { 
  addSignUp,
  authenticate, 
  destroySession, 
  getAuthStatus,
  authRequired } from "./controllers/authController.js";

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


////PLaylist EndPoints Section

//Get Playlist
app.get('/api/playlists', getPlaylist)

//Add PlayList
app.post("/api/addnewplaylist", addPlaylist)


//Edit Playlist
app.post('/api/editplaylist', editPlaylist)


//Delete Playlist
app.post("/api/deleteplaylist", deletePlayList)
 


////Songs EndPoints Section

//Get playlist Songs
app.get("/api/playlistsongs", playlistSong)

//Get Playlist Songs
app.get("/api/playlistsongs/:id", playlistSong)

//Add new Song
app.post("/api/addnewsong", addNewSong)

//Delete Song
app.post("/api/deletesong/:songId", deleteSong)



////Users Endpoints Section

//Sign-Up
app.post("/api/signup", addSignUp)

//Login
app.post("/api/auth", authenticate)

//Logout
app.post("/api/logout", authRequired, destroySession)

//checks authentication
app.get("/api/auth/status", getAuthStatus)


////Friends List Endpoints

//Get Friend List
app.get("/api/friendlist", authRequired, getFriendList)



  ViteExpress.listen(app, port, () =>
  console.log(`Listening on http://localhost:${port}`)
);
