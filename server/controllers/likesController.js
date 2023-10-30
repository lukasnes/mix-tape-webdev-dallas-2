import { 
    Sequelize 
} from "sequelize"


import{
    Likes, 
    Playlist,
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
            attributes: []
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

// const topPlaylists = await Likes.findAll({
//         attributes: [
//             'playlistId',
//             [Sequelize.fn('COUNT', 
//                 Sequelize.col('likes.playlist_id')), 'likeCount'],
//         ],
//         group: ['likes.playlist_id','playlist.playlist_id', 'user.user_id'],
//         order: [[Sequelize.fn('COUNT', 
//         Sequelize.col('likes.playlist_id')), 'DESC']],
//         include: [{
//             model: Playlist,
//             attributes: [
//             'playlistId',
//             'name', 
//             'createdAt', 
//             'userId',
//         ]
//         },
//         {
//             model: User,
//             attributes: [
//                 'userId',
//                 'username',
//             ]
//         }],
//         required: true

//       })

    console.log(topPlaylists)
      console.log(topPlaylists[0].user)
      res.json(topPlaylists)
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
    console.log(myLikes)
    console.log('test, test')


    console.log('name', myLikes[0].user)
    // myLikes = myLikes.map(like => like.playlist)

    res.json(myLikes)
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
            userId, 
            playlistId
        }
    })
    console.log(liked)

    if ( liked ) {
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