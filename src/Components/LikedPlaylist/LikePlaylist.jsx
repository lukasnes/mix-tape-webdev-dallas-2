// import axios from "axios";
// import { useState, useEffect } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
import { useSelector } from "react-redux"

const LikePlaylist = ({ pl }) => {
  const userId = useSelector(state=>state.userId)
  console.log(pl)
  const playlistData = pl.map(pl => {
    let {playlist, isFollowing, hasLiked} = pl
  return <PlaylistRow 
  pl={playlist} 
  isFollowing={isFollowing}
  hasLiked={hasLiked}
  key={playlist.playlistId}/>
} )

  return (
    <div>
      {playlistData}
    </div>
  );
};

export default LikePlaylist;
