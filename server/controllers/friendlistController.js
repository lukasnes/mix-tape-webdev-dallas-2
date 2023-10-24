import { 
    FriendList, 
    Friend, 
    User } from "../../database/model.js"

const getFriendList = async (req, res) => {
  let { userId } = req.session
  console.log(userId, "userID")
  const friendlist = await FriendList.findOne({
    where: {
      userId: userId,
    },
// <<<<<<< HEAD
  })

  console.log(friendlist)
// =======
  // });
//   console.log(friendlist);
// >>>>>>> f84de8b0315eb7da0e20752802bccb1b706e0893
  let friends = await Friend.findAll({
    where: {
      friendListId: friendlist.friendListId,
    },
    include: {
      model: User,
      attributes: ["userId", "username"],
    },
  })
  console.log(friends)

  
  friends = friends.map(friend => friend.user)
  console.log(friends)

  res.json(friends)
}

export { 
    getFriendList
 }
