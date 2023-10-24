import "../Friend/Friend.css";

const Friends = ({ friend, index, setPageState, setFriendId }) => {
  return (
    <div> 
    <div className="friendsContainer" key={index}>
      <div onClick={() =>{
        setFriendId(friend.userId)
        setPageState("friendsPlaylist")
      }} className="friendDisplay">
        {friend.userId} {friend.username}
      </div>
      <div className="likes">Likes</div>
    </div>
    </div>
  );
};

export default Friends;
