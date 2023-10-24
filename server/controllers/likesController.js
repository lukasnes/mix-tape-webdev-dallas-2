import{
    Likes, Playlist,
} from "../../database/model.js"



const getTopLiked = async (req, res) => {
const getAllPlaylists = await Playlist.findAll()
res.status(200).json(getAllPlaylists)

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