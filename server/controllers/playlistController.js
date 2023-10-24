import { 
    User, 
    Playlist,
 } from "../../database/model.js"


const getPlaylist = async (req, res) => {

    // const playlists = await Playlist.findAll({where: {userId: userId}})
    // res.status(200).json(playlists)
    // console.log(playlists)

    let { userId } = req.session
    if ( userId ){
        const playlists = await Playlist.findAll({
            where: {
                userId: userId
            }
        })
        res.status(200).json(playlists)
        console.log(playlists)
    } else {
        const allPlaylists = await Playlist.findAll()
        res.status(200).json(allPlaylists)
        console.log(allPlaylists)
    }


}


const addPlaylist = async (req, res) => {
    // const { name } = req.body
    const user = await User.findOne(
        {
            where: {
                userId: userId
            }
        }
    )
    
     const newPlaylist = await user.createPlaylist(
        {
        //  name: name
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

};

export { 
    getPlaylist,
    addPlaylist, 
    editPlaylist,
    deletePlayList,
}
