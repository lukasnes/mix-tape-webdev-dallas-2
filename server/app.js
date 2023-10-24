import express from "express";
import session from "express-session"
import morgan from "morgan";
import ViteExpress from "vite-express";


import { 
  addSignUp,
  authenticate, 
  destroySession, 
  getAuthStatus,
  authRequired } from "./controllers/authController.js";
  
  import { 
    getMyPlaylist,
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
    deleteSong } from "./controllers/songController.js";
  

   import{
    addFriend,
    deleteFriend,
    getFriendPlaylists
   } from "../server/controllers/friendController.js"

   import {
    getTopLiked,
    myLikes,
    addLike,
    removeLike
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


////PLaylist EndPoints Section
//This needs to have getAuth added in order to only get this onece you are logged in

//Get Playlist
app.get('/api/playlists', getMyPlaylist)

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


////FriendList Endpoints

//Get FriendList
app.get("/api/friendlist", authRequired, getFriendList)


////Friend Endpoints

//Add Friend
app.post("/api/addfriend/:friendUserId", authRequired, addFriend )

//Remove Friend
app.post("/api/deletefriend/:friendId", authRequired, deleteFriend)

//Get ALL Friend Playlists
app.get("/api/friend/playlists", authRequired, getFriendPlaylists)

//Get Friend Playlist Id
app.get("api/friend/playlists/:id")

//Likes Endpoints

//get all TOP Liked Playlists
app.get("/api/gettopliked", getTopLiked)

//get all liked playlist by user
app.post("/api/allmyliked", authRequired, myLikes)

//add a like to Playlist
app.post("/api/likeplaylist", authRequired, addLike)

//unlike a playlist
app.post("api/removelike", authRequired, removeLike)




  ViteExpress.listen(app, port, () =>
  console.log(`Listening on http://localhost:${port}`)
);
