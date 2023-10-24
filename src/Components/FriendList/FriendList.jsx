import { useState, useEffect } from "react";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import axios from "axios";
import "../Header/header.css";

const FriendList = () => {
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
          <div key={index}>
            {friend.userId} {friend.username}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendList;
