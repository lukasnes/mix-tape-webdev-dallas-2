import{
    Friend, 
    FriendList,
    User
} from "../../database/model.js"



const toggleFriendship = async (req, res) => {

    const { 
        userId,
        friendId,
     } = req.params
    
    const friendList = await FriendList.findOne({
        where: {
            userId,
        }
    })
    
    console.log(friendList)

    const friend = await Friend.findOne({
        where: {
            friendListId: friendList.friendListId,
            userId: friendId
        }
    })

    console.log(friend)

    if (friend) {
        friend.destroy()
    } else {
        await friendList.createFriend({
            userId: friendId
        })

    }
    let friends = await Friend.findAll({
        where: {
          friendListId: friendList.friendListId,
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



// const addFriend = async (req, res) => {
    
//     const { 
//         userId,
//         friendId,
//      } = req.params
    
//     const friendList = await FriendList.findOne({
//         where: {
//             userId,
//         }
//     })
    
//     console.log(friendList)

//     const friend = await Friend.findOne({
//         where: {
//             friendListId: friendList.friendListId,
//             userId: friendId
//         }
//     })

//     if (friend) {
//         friend.destroy()
//         res.json({
//             isFriend: false
//         })
//     } else {
//         await friendList.createFriend({
//             userId: friendId
//         })
//         res.status(200).json({
//             isFriend: true
//         })
//     }
        
        
        // let { userId } = req.session
        // console.log( "userId:", userId )

    // const { friendUserId } = req.params
    // const friendlist = await FriendList.findOne({
    //     where: {
    //         userId: userId,
    //     }
    // })

    // console.log(friendlist)


    // const newFriend = await friendlist.createFriend({
    //     userId: friendUserId
        
    // })
    // console.log(newFriend)


    // let friends = await Friend.findAll({
    //     where: {
    //       friendListId: friendlist.friendListId,
    //     },
    //     include: {
    //       model: User,
    //       attributes: ["userId", "username"],
    //     },
    //   })
    //   console.log(friends)
    
    //   friends = friends.map(friend => friend.user)
    //   console.log(friends)
    
    //   res.json(friends)

// }

// const deleteFriend = async (req, res) => {
//     let { userId } = req.session
//     let { friendUserId } = req.params
//     const friendlist = await FriendList.findOne({
//         where: {
//             userId: userId,
//         }
//     })
//     const deletingFriend = await Friend.findOne({
//         where: {
//             userId: friendUserId,
//             friendListId: friendlist.friendListId
//         }
//     })
//     console.log(deletingFriend)
//     deletingFriend.destroy()

//     const friends = await Friend.findAll({
//         where: {
//             friendListId: friendlist.friendListId,
//         },
//         include: {
//             model: User,
//             attributes: ["userId", "username"],
//         },
//     })
//     console.log(friends)

//     friends = friends.map(friend => friend.user)
//     console.log(friends)
//     res.status(200).json(friends)
// }





// const getFriendPlaylists = async (req,res) => {
//     let { userId } = req.session
//     console.log("userId:", userId )

//     const { friendUserId } = req.params
//     console.log("friendUserId:", friendUserId)
    
//     const friendPlaylists = await Friend.findOne({
//         where: {
//             userId: friendUserId
//         }
//     })
//     console.log(friendPlaylists)

//     if ( friendUserId ) {
//         const playlists = await Playlist.findAll({
//             where: {
//                 userId: friendUserId
//             }
//         })
//         res.status(200).json(playlists)
//         console.log(playlists)
//     } else {
//         res.status(200).json({ success : false, message: 'No Friendlist Found'})
//     }
// }



// const getFriendPlaylistId = async (req, res) => {

// }

export {
    toggleFriendship,
    // addFriend,
    // deleteFriend,
    // getFriendPlaylists,
    // getFriendPlaylistId,
}