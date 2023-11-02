
import Friends from "../Friend/Friends";
// import Playlist from "../../Pages/Playlist/Playlist";
import LikePlaylist from "../LikedPlaylist/LikePlaylist";

const FriendList = ({
  setPageState,
  setFriendId,
  pl,
  setPlaylist,
  friends,
  setLoadingState,
  allPlaylist
}) => {
  // console.log(pl)
  return (
    <div className="friendDisplay">
      <div className="friendName">
        {friends.map((friend, index) => (
          <Friends
            friend={friend}
            key={index}
            setPageState={setPageState}
            setFriendId={setFriendId}
            setPlaylist={setPlaylist}
            setLoadingState={setLoadingState}
            following={true}
          />
        ))}

      </div>

      <div>
        <LikePlaylist allPlaylist={allPlaylist} setPageState={setPageState} />
      </div>
    </div>
  );
};

export default FriendList;
