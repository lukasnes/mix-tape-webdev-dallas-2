import { useNavigate } from "react-router-dom";
import "./playlistRow.css";
import axios from "axios";
import { useSelector } from "react-redux";
import DelOrLike from "../DelOrLike/DelOrLike";
import FollowButton from "../Follow/Follow";
import { useEffect } from "react";

const PlaylistRow = ({ pl, setPlaylist, user }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.loggedIn);
  const userId = useSelector((state) => state.userId);

  // const deletePlaylist = async () => {
  //     if( isLoggedIn === true && userId === pl.userId ) {
  //        const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId})
  //         setPlaylist(res.data)
  //     }
  // }

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
  console.log(pl);

  return isLoggedIn ? (
    <div id="playlistRow" className="displayRow">
      <div id="timeStampDiv">
        <p id="timeStamp"> {time(pl)} </p>
        <button
          id="userNameButton"
          className="button"
          onClick={followUserHandler}
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
        {userId === pl.userId ? (
          <></>
        ) : (
          <FollowButton friendId={pl.user.userId} user={pl.user.username} />
        )}

        <div id="likeCountDiv">
          <p id="likeCount">likes:{pl.likeCount}</p>
        </div>
        <DelOrLike pl={pl} setPlaylist={setPlaylist} />
      </div>
    </div>
  ) : (
    <div id="playlistRow" className="displayRow">
      <div id="timeStampDiv">
        <p id="timeStamp"> {time(pl)} </p>
        <button id="userNameButton" className="button">
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
          <p id="likeCount">likes:{pl.likeCount}</p>
        </div>
        {/* <DelOrLike pl={pl} setPlaylist={setPlaylist} />  */}
      </div>
    </div>
  );
};

export default PlaylistRow;
