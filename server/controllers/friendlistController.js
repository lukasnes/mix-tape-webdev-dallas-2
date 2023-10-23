import { FriendList, Friends, User } from "../../database/model.js";

const getFriendList = async (req, res) => {
  let { userId } = req.session;
  console.log(userId, "userID");
  const friendlist = await FriendList.findOne({
    where: {
      userId: userId,
    },
  });

  const friend = await Friends.findAll({
    where: {
      friendlistId: friendlist.friendlistId,
    },
    include: {
      model: User,
      attributes: ["userId", "username"],
    },

  });
  console.log(friend)

  console.log(friendlist, "Friendlist");
  if (!friendlist) {
    return res.status(404).json({ error: "No Friends Found" });
  }

  //packaged up friends
  const { friends } = friendlist;

  //mapped out friends
  const friendsMap = friendlist.friends.map((friend) => {
    return {
      friendId: friend.friendId,
      username: friend.user.username,
    };
  });
  console.log(friendsMap);

  res.json(friends);
};

export { getFriendList };
