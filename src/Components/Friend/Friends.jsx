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
  friendId
}) => {
  console.log(friend);


  return (
    <div>
      <div id="friendWrapper">
        <div className="friendContainer" key={index}>
          <div
            onClick={() => {
              setFriendId(friend.userId);
              setLoadingState("friendsPlayList");
              setPageState("loading");
            }}
          >
            {friend.username}
            <FollowButton friendId={friendId} />
          </div>

           <div className="userId">{friend.userId}</div>
         </div>

          
          <div id='userId'>{friend.userId}</div>


          <button className="button">+ Follow</button>
        </div> 
      </div>
  );
};

export default Friends;
