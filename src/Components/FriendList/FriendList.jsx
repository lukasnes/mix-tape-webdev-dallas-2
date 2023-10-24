import { useState, useEffect } from "react";
import axios from "axios";
import "../Header/header.css";
import Friends from "../Friend/Friends";


const FriendList = ({setPageState, setFriendId}) => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    getFriendList();
  }, []);

  const getFriendList = async () => {
    try {
      const res = await axios.get("/api/friendlist");
      setFriendList(res.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <div>
        {friendList.map((friend, index) => (
          <Friends friend={friend} key={index} setPageState= {setPageState} setFriendId= {setFriendId} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
