import { useState, useEffect } from "react";
import axios from "axios";
import "../Header/header.css";
import Friends from "../Friend/Friends";
import Playlist from "../../Pages/Playlist/Playlist";


const FriendList = ({setPageState, setFriendId, pl, setPlaylist}) => {
  // const [friendList, setFriendList] = useState([]);

  // useEffect(() => {
  //   getFriendList();
  // }, []);

  // const getFriendList = async () => {
  //   try {
  //     const res = await axios.get("/api/friendlist");
  //     setFriendList(res.data);
  //   } catch (error) {
  //     console.error("Error", error);
  //   }
  // };

  return (
    <div>
      <div>
        {pl.map((friend, index) => (
          <Friends friend={friend} key={index} setPageState= {setPageState} setFriendId= {setFriendId} setPlaylist={setPlaylist} pl={pl} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
