// import axios from "axios";
// import { useState, useEffect } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
import { useSelector } from "react-redux"

const LikePlaylist = ({ allPlaylist }) => {
  const userId = useSelector(state=>state.userId)

  const playlistData = allPlaylist.map(pl => {
    let {playlist, isFollowing, hasLiked} = pl
  return <PlaylistRow 
  pl={playlist} 
  isFollowing={isFollowing}
  hasLiked={hasLiked}
  key={playlist.playlistId}
  allPlaylist={allPlaylist}/>
} )

  return (
    <div>
      {playlistData}
    </div>
  );
};

export default LikePlaylist;
