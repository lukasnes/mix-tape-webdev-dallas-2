import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux"


const Loading = ({
  loadingState,
  setPageState,
  setPlaylist,
  setFriendList,
  friendId
}) => {
    let userId = useSelector(state=> state.userId)
  useEffect(() => {
    switch (loadingState) {
      case "me":
        const getMyList = async () => {
          let res = await axios.get(`/api/playlists/${userId}`);

          setPlaylist(res.data);
          setPageState("myPlaylist");
        };
        getMyList();
        

        break;

      case "hot":
        const getPlaylist = async () => {
          let res = await axios.get("/api/likes/top");
          console.log(res.data);

          setPlaylist(res.data);
          setPageState("hot");
        };
        getPlaylist();
        

        break;

      case "friends":
        const getFriendList = async () => {
          let res = await axios.get("/api/friendlist");
          let {data} = await axios.get(`/api/likes`);
          setFriendList(res.data);
          setPlaylist(data);
          setPageState("friendsList");
        };
        getFriendList();
       
    
        break;

      case "friendsPlayList":
        const getMyFriendPlayList = async () => {
          let res;
          if (friendId !== null) {
            console.log(friendId)
            res = await axios.get(`/api/playlists/${friendId}`);
          }
          setPlaylist(res.data);
          setPageState("friendsPlaylist");
        };
        getMyFriendPlayList();
        
    }
  }, []);

  return <div>Loading Playlist...</div>;
};

export default Loading;
