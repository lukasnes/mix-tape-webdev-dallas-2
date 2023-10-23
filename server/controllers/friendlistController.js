import { FriendList, Friend, User } from "../../database/model.js";

const getFriendList = async (req, res) => {
  let { userId } = req.session;
  console.log(userId, "userID");
  const friendlist = await FriendList.findOne({
    where: {
      userId: userId,
    },
  });

  const friends = await Friend.findAll({
    where: {
      friendlistId: friendlist.friendlistId,
    },
    include: {
      model: User,
      attributes: ["userId", "username"],
    },

  });
  console.log(friends)


  res.json(friends);
};

export { getFriendList };

