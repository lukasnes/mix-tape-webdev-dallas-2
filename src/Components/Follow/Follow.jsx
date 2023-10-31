import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const FollowButton = ({ friendId, user }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const loggedIn = useSelector((state) => state.loggedIn);
  const [isLoading, setIsLoading]= useState(true)
  //   let friendId = useSelector(state=> state.friendId)
  //   console.log(friendId)
console.log(isLoading)
  const toggleFollow = async () => {
    const res = await axios.post(`/api/friend/toggle/${friendId}`);
    console.log(res);
    setIsFollowing(!isFollowing);
  };

  useEffect(() => {
    const checkFollowing = async () => {
      let res = await axios.get(`/api/friend/${friendId}`);
      console.log(res)
      setIsFollowing(res.data.following);
      setIsLoading(false)
    };
    checkFollowing();
  }, []);

  return loggedIn  && !isLoading ? (

    <div>
        <p>
        {user}
        </p>
      
        <button className="button" onClick={toggleFollow}>
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
    </div>
  ): (<>
  </>)

};

export default FollowButton;
