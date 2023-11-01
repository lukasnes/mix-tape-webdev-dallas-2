import { BsHeartFill, BsHeart } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const LikeButton = ({ setPlaylist, pl, liked }) => {
  const [like, setLike] = useState(liked);
  const loggedIn = useSelector((state) => state.loggedIn);
  const userId = useSelector((state) => state.userId);

  const likePlaylist = async () => {
    const res = await axios.post(`/api/${userId}/like/${pl.playlistId}`);
    console.log(res);
    setLike(!like);
  };

  return loggedIn ? (
    <div>
      {like ? (
        <BsHeartFill
          id="likePlaylistButton"
          className="button roundButton"
          onClick={() => likePlaylist()}
        />
      ) : (
        <BsHeart
          id="likePlaylistButton"
          className="button roundButton"
          onClick={() => likePlaylist()}
        />
      )}
    </div>
  ) : (
    <></>
  );
};

export default LikeButton;
