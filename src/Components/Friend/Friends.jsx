import "../Friend/Friend.css";
import LikePlaylist from "../LikedPlaylist/LikePlaylist";


const Friends = ({ friend, index, setPageState, setFriendId, setLoadingState }) => {
  console.log(friend)
  return (
    <div>
      <div id='friendsWrapper'>
        <div className="friendsContainer" key={index}>
          <div
            onClick={() => {
              setFriendId(friend.userId);
              setLoadingState("friendsPlayList")
              setPageState("loading");
            }}
            className="friendDisplay"
          >
            {friend.username}
          </div>
          <div className="userId">{friend.userId}</div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
