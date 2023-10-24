import "../Friend/Friend.css";
import LikePlaylist from "../LikedPlaylist/LikePlaylist";


const Friends = ({ friend, index, setPageState, setFriendId }) => {
  return (
    <div>
      <div className="friendsContainer" key={index}>
        <div
          onClick={() => {
            setFriendId(friend.userId);
            setPageState("friendsPlaylist");
          }}
          className="friendDisplay"
        >
          {friend.username}
        </div>
        <div className="userId">{friend.userId}</div>
      </div>
      <div className="likes">
        <LikePlaylist/>
      </div>
    </div>
  );
};

export default Friends;
