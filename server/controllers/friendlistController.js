import { FriendList, Friend, User } from "../../database/model.js";

const getFriendList = async (req, res) => {
  let { userId } = req.session;
  console.log(userId, "userID");
  const friendlist = await FriendList.findOne({
    where: {
      userId: userId,
    },
  });
  console.log(friendlist);
  const friends = await Friend.findAll({
    where: {
      friendListId: friendlist.friendListId,
    },
    include: {
      model: User,
      attributes: ["userId", "username"],
    },
  });
  console.log(friends);

  friends = friends.map(friend => friend.user)
  console.log(friends)
  
  res.json(friends);
};

export { getFriendList };
