import axios from "axios";
import { useState, useEffect } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";

const LikePlaylist = () => {
  const [likedPlaylist, setLikedPlaylist] = useState([]);
  const playlistData = likedPlaylist.map(pl => <PlaylistRow pl={pl}/> )

  useEffect(() => {
    getLikedPlaylist();
  }, []);

  const getLikedPlaylist = async () => {
    const res = await axios.get("/api/likes/:userId");
    setLikedPlaylist(res.data);
  };

  return (
    <div>
      {playlistData}
    </div>
  );
};

export default LikePlaylist;
