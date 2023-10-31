import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
// import axios from "axios";

const MyPlaylist = ({ pl, setPlaylist }) => {
  const userId = useSelector((state) => state.userId);

  let playlistData = pl.map((pl) => {
    return (
      <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
    );
  });
  return playlistData;
};


export default MyPlaylist;
