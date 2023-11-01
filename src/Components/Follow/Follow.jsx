import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const FollowButton = ({ friendId, user, following }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const loggedIn = useSelector((state) => state.loggedIn);

  //   let friendId = useSelector(state=> state.friendId)

  const toggleFollow = async () => {
    const res = await axios.post(`/api/friend/toggle/${friendId}`);
    setIsFollowing(!isFollowing);
  };

  return loggedIn ? (
    <div>
      <button className="button" onClick={toggleFollow}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </div>
  ) : (
    <></>
  );
};

export default FollowButton;
