import { 
    User, 
    Playlist,
    Likes
 } from "../../database/model.js"


const getPlaylistByUser = async (req, res) => {

    let { userId } = req.params 
 
        const playlists = await Playlist.findAll({
            where: {
                userId: +userId
            },
            include: {
                model: User,
                attributes:[
                    'username',
                ]
            }


        })
        res.status(200).json(playlists)
        console.log(playlists)
    } 


const addPlaylist = async (req, res) => {
    const { userId } = req.session
    const user = await User.findOne(
        {
            where: {
                userId: userId
            }
        }
    )
    
     const newPlaylist = await user.createPlaylist(
        {
         name: 'New Playlist'
        }
    )
    res.status(201).json(newPlaylist)
};


const editPlaylist = async (req,res) => {


    const {
        playlistId,
        playlistname
    } = req.body

    const playlist = await Playlist.findOne(
        {
            where:
            { playlistId:playlistId }
        }
        
        )
        playlist.name = playlistname
        await playlist.save()

    res.status(200).json(playlist)

}

const deletePlayList = async (req, res) => {
    const { userId } = req.session
    console.log("userId:", userId)

    const { playlistId } = req.body
    console.log("playlistId:", playlistId)

    const likes = await Likes.findAll(

    )
    console.log(likes)

    
    await Likes.destroy({
            where:{
                // userId: userId,
                playlistId: playlistId
            }
        })


    const playlist = await Playlist.findOne(
        {
            where:
            { playlistId:playlistId }
        }
    )
    await playlist.destroy()



    const playlists = await Playlist.findAll(
        {
            where: {
                userId : userId
            }
        }
    )
    res.status(200).json(playlists)

}

// const updatedPlaylist = async (req, res) => {

// }

export { 
    getPlaylistByUser,
    addPlaylist, 
    editPlaylist,
    deletePlayList,
}
