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


const myLikes = async (req, res) => {

    let { userId } = req.session


}

const addLike = async (req, res) => {

}

const removeLike = async (req, res) => {

}


export {
    getTopLiked,
    myLikes,
    addLike,
    removeLike
}