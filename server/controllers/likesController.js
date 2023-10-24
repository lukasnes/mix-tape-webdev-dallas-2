import{
    Likes, 
    Playlist,
} from "../../database/model.js"



const getTopLiked = async (req, res) => {
const getAllPlaylists = await Playlist.findAll()
res.status(200).json(getAllPlaylists)
return

const topPlaylists = await Playlist.findAll({
    include: {
       model: Likes,
    },
    order: [
        [{ }]
    ]
})
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

}


const getMyLikes = async (req, res) => {
    
    let { userId } = req.session

    let myLikes = await Likes.findAll({
        where: {
            userId: userId
        },
        include: {
            model: Playlist,
            attributes: [
                'playlistId',
                'name',
                'createdAt'
            ]
        }
    })
    console.log(myLikes)



    myLikes = myLikes.map(like => like.playlist)

    res.json(myLikes)
}

const addLike = async (req, res) => {

}

const removeLike = async (req, res) => {

}


export {
    getTopLiked,
    getMyLikes,
    addLike,
    removeLike
}