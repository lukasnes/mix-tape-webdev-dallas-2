import{
    Likes, Playlist,
} from "../../database/model.js"



const getTopLiked = async (req, res) => {
const getAllPlaylists = await Playlist.findAll()
res.status(200).json(getAllPlaylists)



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