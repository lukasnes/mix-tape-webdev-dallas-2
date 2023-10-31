import "../Friend/Friend.css";
// import LikePlaylist from "../LikedPlaylist/LikePlaylist";

const Friends = ({
  friend,
  index,
  setPageState,
  setFriendId,
  setLoadingState,
}) => {
  // console.log(friend);
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
          </div>
          
          <div id='userId'>{friend.userId}</div>


          <button className="button">+ Follow</button>
        </div>
        
      </div>
    </div>
  );
};

export default Friends;
