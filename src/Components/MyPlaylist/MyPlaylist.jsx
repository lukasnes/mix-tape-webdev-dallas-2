import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
// import axios from "axios";

const MyPlaylist = ({ allPlaylist, setPageState }) => {
  const userId = useSelector((state) => state.userId);

  let playlistData = allPlaylist.map((pl) => {
  let {playlist, isFollowing, hasLiked} = pl

    return (
      <PlaylistRow 
      pl={playlist} 
      isFollowing={isFollowing}
      hasLiked={hasLiked}
      setPageState={setPageState} key={playlist.playlistId}
       />
    );
  });
  return playlistData;
};


export default MyPlaylist;
