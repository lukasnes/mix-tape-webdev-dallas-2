import React, { useState, useSelector } from 'react';
import axios from 'axios';

const FollowButton = ({friendId}) => {
  const [isFollowing, setIsFollowing] = useState(false);
//   let friendId = useSelector(state=> state.friendId)
//   console.log(friendId)

  
  const toggleFollow = async () => {
    const res = await axios.post(`/api/friend/toggle/:friendId`)
    setIsFollowing((pl) => !pl);
  };

  return (
    <div>
      <button onClick={toggleFollow}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default FollowButton;
