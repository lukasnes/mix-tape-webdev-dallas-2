import { 
    Sequelize 
} from "sequelize"


import{
    Likes, 
    Playlist,
    Friend,
    FriendList,
    User,
} from "../../database/model.js"



const getTopLiked = async (req, res) => {

console.log('hit')

const topPlaylists = await Playlist.findAll({
    attributes:
    [
        'playlistId',
        'name',
        'createdAt',

        [Sequelize.fn('COUNT', Sequelize.col('likes.playlist_id')), 'likeCount']
    ],
    include: 
    [
        {
            model: Likes,
            attributes: [

            ],

        },
        {
            model: User,
            attributes: 
            [
                'userId',
                'username',
            ]
        }
    ],

    group: 
        [
            'playlistId', 
            'user.user_id'
        ],

    order: [[Sequelize.fn('COUNT', 
        Sequelize.col('likes.playlist_id')), 'DESC']],


})

let playlistData = await Promise.all(topPlaylists.map( async (pl)=>{
    let plObj = {
        playlist: pl,

    }
    if(req.session.userId){
        const friendList = await FriendList.findOne({
            where: {
                userId: req.session.userId
            },
            include: {
                model: Friend,
                attributes: [
                    'friendId',
    
                ],
                where: {
                    userId: pl.user.userId
                }
            }
        })
        if(friendList){
            plObj.isFollowing = true
        } else {
            plObj.isFollowing = false
        }
        const liked = await Likes.findOne({
            where: {
                playlistId: pl.playlistId,
                userId: req.session.userId,
            }
        })

        if(liked){
            plObj.hasLiked = true
        } else {
            plObj.hasLiked = false
        }

        console.log(friendList)
    }
    return plObj

}))

console.log(playlistData)
res.status(200).json(playlistData)

}

// SELECT CountQueuingStrategy(*) FROM Likes;
// GROUP BY getFriendPlaylistId;
// ORDER BY  CountQueuingStrategy(*) DESC
// LIMIT 10

// Post.findAll({
//     attributes: {
//         include: [
//             [
//                 sequelize.literal(`(
//                     SELECT COUNT(*)
//                     FROM reactions AS reaction
//                     WHERE
//                         reaction.postId = post.id
//                         AND
//                         reaction.type = "Laugh"
//                 )`),
//                 'laughReactionsCount'
//             ]
//         ]
//     },
//     order: [
//         [sequelize.literal('laughReactionsCount'), 'DESC']
  
// const topPlaylists = await Playlist.findAll({
//     include: {
//         model: Likes,
//     },
//     order: [
//         [{ }]
//     ]
// })

// const rankedPlaylists = await Playlist.findAll({
//     attributes: {
//       include: [
//         [sequelize.fn('COUNT', sequelize.col('likes.likesId')), 'likeCount'],
//       ],
//     },
//     include: {
//       model: Likes,
//       attributes: [],
//     },
//     group: ['Playlist.playlistId'],
//     order: [[sequelize.literal('likeCount'), 'DESC']],
//   });

//   res.json(rankedPlaylists)



const getMyLikes = async (req, res) => {
    
    let { userId } = req.session

    let myLikes = await Playlist.findAll({
        attributes:[
            'playlistId',
            'name',
            'createdAt',
            
            [Sequelize.fn('COUNT', Sequelize.col('likes.playlist_id')), 'likeCount']
        ],
        include: [
            {
                model: Likes,
                attributes: [],
                where: {
                    userId: userId
                },
        },
        {
            model:User,
            attributes:
            [
                'userId',
                'username',
            ]
        }
        ],
        group:
        [
            'playlistId',
            'user.user_id'
        ],
    })

    let playlistData = await Promise.all(myLikes.map( async (pl)=>{
        let plObj = {
            playlist: pl,

        }
        if(req.session.userId){
            const friendList = await FriendList.findOne({
                where: {
                    userId: req.session.userId
                },
                include: {
                    model: Friend,
                    attributes: [
                        'friendId',
        
                    ],
                    where: {
                        userId: pl.user.userId
                    }
                }
            })
            if(friendList){
                plObj.isFollowing = true
            } else {
                plObj.isFollowing = false
            }
            const liked = await Likes.findOne({
                where: {
                    playlistId: pl.playlistId,
                    userId: req.session.userId,
                }
            })

            if(liked){
                plObj.hasLiked = true
            } else {
                plObj.hasLiked = false
            }

            console.log(friendList)
        }
        return plObj

    }))

    console.log(playlistData)
    res.status(200).json(playlistData)
}

// const getMyLikes = async (req, res) => {
    
//     let { userId } = req.params

//     let myLikes = await Likes.findAll({
//         where: {
//             userId: userId
//         },
//         include: {
//             model: Playlist,
//             attributes: [
//                 'playlistId',
//                 'name',
//                 'createdAt'
//             ]
//         }
//     })
//     console.log(myLikes)



//     myLikes = myLikes.map(like => like.playlist)

//     res.json(myLikes)
// }

const toggleLike = async (req, res) => {
    let { userId, 
        playlistId } = req.params

    const liked = await Likes.findOne({
        where: {
            userId: +userId, 
            playlistId: +playlistId
        }
    })
    console.log(liked)

    if ( liked !== null ) {
        liked.destroy()
        res.json({
            liked: false,
        })
    } else {
        await Likes.create({ 
            userId, 
            playlistId
        }) 
        res.status(200).json({
        liked: true
    })
    }
}

// const removeLike = async (req, res) => {

// }


export {
    getTopLiked,
    getMyLikes,
    toggleLike,
    // removeLike
}