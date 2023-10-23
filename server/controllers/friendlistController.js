import {
    FriendList,
    Friends,
    User
} from '../../database/model.js'

const getFriendList = async (req, res) => {
    let { userId } = req.session
    console.log(userId, "userID")
    const friendlist = await FriendList.findOne(
        {
            where: {
                userId: userId
        },
            include: {
                model: Friends,
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        }
    )
    console.log(friendlist, "Friendlist")
    if (!friendlist) {
        return res.status(404).json({ error: "No Friends Found" })
    }

    //packaged up friends
    const {friends} = friendlist
    
    //mapped out friends
    const friendsMap = friendlist.friends.map(friend => {
        return {
            friendId: friend.friendId,
            username: friend.user.username,
        }
    })
    console.log(friendsMap)



    res.json(friends)
}


const addFriend = async (req, res) => {
    let {userId} = req.session
    const {} = req.body

}

const deleteFriend = async (req, res) => {

}




export {
    getFriendList,
    addFriend,
    deleteFriend,
}