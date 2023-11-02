// import axios from "axios";
// import { useState, useEffect } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
import { useSelector } from "react-redux"

const LikePlaylist = ({ allPlaylist, setPageState }) => {
  const userId = useSelector(state=>state.userId)

  const playlistData = allPlaylist.map(pl => {
    let {playlist, isFollowing, hasLiked} = pl
  return <PlaylistRow 
  pl={playlist} 
  isFollowing={isFollowing}
  hasLiked={hasLiked}
  key={playlist.playlistId}
  setPageState={setPageState}/>
} )

  return (
    <div>
      {playlistData}
    </div>
  );
};

export default LikePlaylist;
