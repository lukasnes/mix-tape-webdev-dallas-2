import "../Friend/Friend.css";
// import LikePlaylist from "../LikedPlaylist/LikePlaylist";


const Friends = ({ friend, index, setPageState, setFriendId, setLoadingState }) => {
  // console.log(friend)
  return (
        <div key={index}>
          
          <div id="userId">{friend.userId}</div>
          

          <div id='info'
            onClick={() => {
              setFriendId(friend.userId);
              setLoadingState("friendsPlayList")
              setPageState("loading");
            }}
          >
            {friend.username}
        </div>
          
        </div>
  );
};

export default Friends;
