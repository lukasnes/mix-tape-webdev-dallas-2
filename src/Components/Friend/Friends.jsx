import axios from "axios";
import "../Friend/Friend.css";
import { useState } from "react";
import FollowButton from "../Follow/Follow";

// import LikePlaylist from "../LikedPlaylist/LikePlaylist";

const Friends = ({
  friend,
  index,
  setPageState,
  setFriendId,
  setLoadingState,
  friendId,
  following
}) => {
  // console.log(friend);

  return (
      <div id="friendContainer">
        <div key={index}>
          <div
            onClick={() => {
              setFriendId(friend.userId);
              setLoadingState("friendsPlayList");
              setPageState("loading");
            }}
          >
            {friend.username}
          </div>
        </div>
        <FollowButton friendId={friend.userId} following={following} />
      </div>
  );
};

export default Friends;
