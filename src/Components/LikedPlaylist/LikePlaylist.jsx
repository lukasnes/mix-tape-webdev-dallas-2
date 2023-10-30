import axios from "axios";
import { useState, useEffect } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
import { useSelector } from "react-redux"

const LikePlaylist = ({ pl }) => {
  const userId = useSelector(state=>state.userId)

  const playlistData = pl.map(pl => <PlaylistRow pl={pl} key={pl.playlistId}/> )

  return (
    <div>
      {playlistData}
    </div>
  );
};

export default LikePlaylist;
