import axios from "axios";
import { useState, useEffect } from "react";
import PlaylistRow from "../PlaylistRow/PlaylistRow";
import { useSelector } from "react-redux"

const LikePlaylist = () => {
  const userId = useSelector(state=>state.userId)
  console.log(userId)

  const [likedPlaylist, setLikedPlaylist] = useState([]);
  const playlistData = likedPlaylist.map(pl => <PlaylistRow pl={pl} key={pl.playlistId}/> )

  useEffect(() => {
    getLikedPlaylist();
  }, []);

  const getLikedPlaylist = async () => {
    const res = await axios.get(`/api/likes/${userId}`);
    setLikedPlaylist(res.data);
  };

  return (
    <div>
      {playlistData}
    </div>
  );
};

export default LikePlaylist;
