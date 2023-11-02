<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 21dee31717993e369a84601fde2a193e2b27ab13
import DelOrLike from "../DelOrLike/DelOrLike"
import FollowButton from "../Follow/Follow"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import "./playlistRow.css"
import axios from "axios"


const PlaylistRow = ({ 
      pl, 
      setPageState, 
      setFriendId,
      setLoadingState,
      user, 
      isFollowing, 
      hasLiked }) => {

            const navigate = useNavigate()
            const isLoggedIn = useSelector((state) => state.loggedIn)
            const userId = useSelector((state) => state.userId)
            const [likesCount, setLikesCount] = useState(+pl.likeCount)
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import "./playlistRow.css";
import axios from "axios";
import { useSelector } from "react-redux";
import DelOrLike from "../DelOrLike/DelOrLike";
import FollowButton from "../Follow/Follow";
import { useState } from "react";
// import LikeButton from "../LikeButton/LikeButton";
>>>>>>> 6acab3b907f3d13d92a6ba453bb0b74383f67a8b


=======
>>>>>>> 21dee31717993e369a84601fde2a193e2b27ab13

  const followUserHandler = async () => {
    await axios.post(`/api/friend/toggle/${user.userId}`);
  };

  const editPlaylist = async () => {
    navigate(`/playlist/${pl.playlistId}`);
  };

  const time = (pl) => {
    if (pl.createdAt !== null) {
      let isoDate = pl.createdAt.split("T", 1)[0];
      return isoDate;
    }
  };

  const plName = (pl) => {
    if (pl.name !== null) {
      let name = pl.name;
      return name;
    }
  };

  return isLoggedIn ? (
    <div id="playlistRow" className="displayRow">
      <div id="timeStampDiv">
        <p id="timeStamp"> {time(pl)} </p>
        <button
          id="userNameButton"
          className="buttonVar"
          onClick={() => {
            setFriendId(pl.user.userId)
            setLoadingState("friendsPlayList")
            setPageState("loading")
                }}

        >
          {pl.user.username}
        </button>
      </div>

      <div
        id="playlistNameDiv"
        className="displayRow"
        onClick={(e) => editPlaylist()}
      >
        <p id="playlistName"> {plName(pl)} </p>
      </div>

      <div id="deleteButtonDiv">
        <div id="followButtonDiv">
          {userId === pl.userId ? (
            <></>
          ) : (
            <FollowButton
              id="followButton"
              friendId={pl.user.userId}
              user={pl.user.username}
              following={isFollowing}
            />
          )}
        </div>
        <div id="likeCountDiv">
          <p id="likeCount">Likes:{likesCount}</p>
        </div>
          <DelOrLike 
              pl={pl} 
              setPageState={setPageState} 
              liked={hasLiked} 
              setLikesCount={setLikesCount} 
              likesCount={likesCount} />
        </div>
    </div>
  ) : (
    <div id="playlistRow" className="displayRow">
      <div id="timeStampDiv">
        <p id="timeStamp"> {time(pl)} </p>
        <button 
            id="userNameButton" 
            className="buttonVar"
            onClick={() => {
                setFriendId(pl.user.userId)
                setLoadingState("friendsPlayList")
                setPageState("loading")
                    }}>
          {pl.user.username}
        </button>
      </div>

      <div
        id="playlistNameDiv"
        className="displayRow"
        onClick={(e) => editPlaylist()}
      >
        <p id="playlistName"> {plName(pl)} </p>
      </div>

      <div id="deleteButtonDiv">
        <div id="likeCountDiv">
          <p id="likeCount">Likes:{likesCount}</p>
        </div>

      </div>
    </div>
  )
}

export default PlaylistRow;
