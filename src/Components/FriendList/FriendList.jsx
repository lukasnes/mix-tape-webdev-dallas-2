import { useState, useEffect } from "react";

const FriendList = () => {

    


  useEffect(()=>{
    getFriendList();
  },[])  

  const getFriendList = async () => {
    let res = await axios.get("/api/friendlist");
    let friendListId = res.data
  };

  return <></>;
};

export default FriendList;
