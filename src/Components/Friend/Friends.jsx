import "../Friend/Friend.css";
import LikePlaylist from "../LikedPlaylist/LikePlaylist";


const Friends = ({ pl, index, setPageState, setFriendId }) => {
  return (
    <div>
      <div id='frindsWrapper'>
        <div className="friendsContainer" key={index}>
          <div
            onClick={() => {
              setFriendId(pl.userId);
              setPageState("friendsPlaylist");
            }}
            className="friendDisplay"
          >
            {pl.user.username}
          </div>
          <div className="userId">{pl.userId}</div>
        </div>
      </div>
      <div id='playlistWrapper'>
        <div id='playlists'>
              <div className="likes">
                <LikePlaylist/>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
