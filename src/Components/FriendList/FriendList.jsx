import { useState, useEffect } from "react";
import axios from "axios";
import "../Header/header.css";
import Friends from "../Friend/Friends";
import Playlist from "../../Pages/Playlist/Playlist";
import LikePlaylist from "../LikedPlaylist/LikePlaylist";


const FriendList = ({setPageState, setFriendId, pl, setPlaylist, friends, setLoadingState}) => {
  console.log(pl)
  return (
    <div>
      <div>
        {friends.map((friend, index) => (
          <>
            <Friends friend={friend} key={index} setPageState={setPageState} setFriendId={setFriendId} setPlaylist={setPlaylist} setLoadingState={setLoadingState}/>
          </>
        ))}
        <div id='playlistWrapper'>
          <div id='playlists'>
            <div className="likes">
              <LikePlaylist pl={pl}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendList;
