import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
// import axios from "axios";

const MyPlaylist = ({ pl, setPlaylist }) => {
  const userId = useSelector((state) => state.userId);

  let playlistData = pl.map((pl) => {
  let {playlist, isFollowing, hasLiked} = pl

    return (
      <PlaylistRow 
      pl={playlist} 
      isFollowing={isFollowing}
      hasLiked={hasLiked}
      setPlaylist={setPlaylist} key={playlist.playlistId} />
    );
  });
  return playlistData;
};


export default MyPlaylist;
