import express from "express";
import session from "express-session"
import morgan from "morgan";
import ViteExpress from "vite-express";


import { 
  addSignUp,
  authenticate, 
  destroySession, 
  getAuthStatus,
  authRequired 
} from "./controllers/authController.js";

import { 
  getPlaylistByUser,
  addPlaylist, 
  editPlaylist,
  deletePlayList, 
} from "./controllers/playlistController.js";


import { 
  getFriendList,
} from "./controllers/friendlistController.js";

import { 
  playlistSong, 
  addNewSong, 
  deleteSong 
} from "./controllers/songController.js";


import{
  toggleFriendship,
} from "../server/controllers/friendController.js"

import {
  getTopLiked,
  getMyLikes,
  toggleLike,
} from "./controllers/likesController.js"


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
  
  
////Users Endpoints Section

//Sign-Up
app.post("/api/auth/signup", addSignUp)

//Login
app.post("/api/auth/login", authenticate)

//Logout
app.post("/api/auth/logout", authRequired, destroySession)

//checks authentication
app.get("/api/auth/status", getAuthStatus)
  


////PLaylist EndPoints Section

//Get Playlist
app.get('/api/playlists/:userId', getPlaylistByUser)

//Add PlayList
app.post("/api/playlist/add", addPlaylist)

//Edit Playlist
app.post('/api/playlist/edit', editPlaylist)

//Delete Playlist
app.post("/api/playlist/delete", deletePlayList)
 

////Songs EndPoints Section

//Get playlist Songs
app.get("/api/playlistsongs", playlistSong)

//Get Playlist Songs
app.get("/api/playlistsongs/:id", playlistSong)

//Add new Song
app.post("/api/addnewsong", addNewSong)

//Delete Song
app.post("/api/deletesong/:songId", deleteSong)


////FriendList Endpoint

//Get FriendList
app.get("/api/friendlist", authRequired, getFriendList)


////Friend Endpoints

//Toggle Friendship
app.post("/api/friend/toggle/:friendId", authRequired, toggleFriendship)


//Likes Endpoints

//get all TOP Liked Playlists
app.get("/api/likes/top", getTopLiked)

//get all liked playlist by user
app.get("/api/likes/:userId", authRequired, getMyLikes)

//Toggle Like Playlist
app.post("/api/:userId/like/:playlistId", authRequired, toggleLike)




  ViteExpress.listen(app, port, () =>
  console.log(`Listening on http://localhost:${port}`)
);
