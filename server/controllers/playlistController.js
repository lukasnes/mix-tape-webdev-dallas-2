//get playlist function and return them
// import axios from 'axios'

//add playlist endpoint creates a pL w/ name of "New Playlist"

//getplaylist data 

import { User, Playlist,  } from "../../database/model.js"

let userId = 1; 

const getPlaylist = async (req, res) => {
    const playlists = await Playlist.findAll({where: {userId: userId}})
    res.status(200).json(playlists)
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
         name:'New Playlist'
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
