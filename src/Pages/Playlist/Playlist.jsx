import Header from "../../Components/Header/Header";
// import HotList from "../../Components/HotList/HotList";
import Hero from "../../Components/Hero/Hero";
import MyPlaylist from "../../Components/MyPlaylist/MyPlaylist";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./playlist.css";
import FriendList from "../../Components/FriendList/FriendList";
import FriendsPlaylist from "../../Components/FriendsPlaylist/FriendPlaylist";
import { useSelector } from "react-redux";
// import { set } from "lodash";
import Loading from "../../Components/Loading/Loading";

const Playlist = () => {
 
  const navigate = useNavigate();
  const userId = useSelector((state) => state.userId);
  const friendsId = useSelector((state) => state.friendId);
  const [pageState, setPageState] = useState("loading");
  const [pageData, setPageData] = useState();
  const [friendId, setFriendId] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [friendlist, setFriendList] = useState([])
  const [loadingState, setLoadingState]= useState("hot")
  

  useEffect(() => {
      switch (pageState) {
        case "hot":
          // const getPlaylist = async () => {
          //   let res = await axios.get("/api/likes/top");
          //   console.log(res.data);
  
          //   setPlaylist(res.data);
          // };
          // getPlaylist();
          setPageData(<Hero pl={playlist} setPlaylist={setPlaylist} />);
          break;
  
        case "friendsList":
          // const getFriendList = async () => {
          //   let res = await axios.get("/api/friendlist");
          //   setFriendList(res.data);
          // };
          // getFriendList();
  
          // const getMyLikeList = async () => {
          //   let res = await axios.get(`/api/likes`);
          //   console.log(res.data)
          //   setPlaylist(res.data);
          // };
          // getMyLikeList();
          setPageData(
            <FriendList
              setPageState={setPageState}
              setFriendId={setFriendId}
              friends={friendlist}
              pl={playlist}
              setPlaylist={setPlaylist}
              setLoadingState={setLoadingState}
            />
          );
          break;
  
        case "friendsPlaylist":
          // const getMyFriendPlayList = async () => {
          //   let res;
          //   if (friendId !== null) {
          //     res = await axios.get(`/api/playlists/${friendsId}`);
          //   }
          //   setPlaylist(res.data);
          // };
          // getMyFriendPlayList();
  
          setPageData(
            <FriendsPlaylist
              friendId={friendId}
              pl={playlist}
              setPlaylist={setPlaylist}
            />
          );
          break;
  
        case "myPlaylist":
         
          setFriendId(null);
          setPageData(<MyPlaylist pl={playlist} setPlaylist={setPlaylist} />);
          break;

          case "loading":
            setPageData(<Loading loadingState={loadingState} setPageState={setPageState} setPlaylist={setPlaylist} friendId={friendId} setFriendList={setFriendList} />)

      }
  }, [pageState]);

  const createPlaylist = async () => {
    const res = await axios.post("/api/playlist/add");
    let newId = res.data.playlistId;
    navigate(`/playlist/${newId}`);
  };

  return (
    <>
      <header>
        <Header setPageState={setPageState} setLoadingState ={setLoadingState} />
      </header>
      <main>
        <div id="playlistContainer">{pageData}</div>
        <div id="createPlaylistDiv">
          <button
            id="createPlaylistButton"
            className="button"
            onClick={() => createPlaylist()}
          >
            {" "}
            Create Playlist{" "}
          </button>
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Playlist;
