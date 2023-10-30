import { useState, useEffect } from "react";
import axios from "axios";
import "../Header/header.css";
import Friends from "../Friend/Friends";
import Playlist from "../../Pages/Playlist/Playlist";
import LikePlaylist from "../LikedPlaylist/LikePlaylist";


const FriendList = ({setPageState, setFriendId, pl, setPlaylist}) => {

  return (
    <div>
      <div>
        {pl.map((pl, index) => (
          <>
            <Friends pl={pl} key={index} setPageState={setPageState} setFriendId={setFriendId} setPlaylist={setPlaylist}/>
            <LikePlaylist pl={pl} />
          </>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
