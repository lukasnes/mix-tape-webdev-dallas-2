//get playlist function and return them
import axios from 'axios'
import { Playlist } from "../../database/model.js"



const getPlaylist = async (req, res) => {
    const playlists = await Playlist.findAll()
    res.status(200).json(playlists)
}


const addPlaylist = async (req, res) => {
    const { name } = req.body
    
     const newPlaylist = await Playlist.create(
        {
         name:name
        }
    )
    res.status(201).json(newPlaylist)
};


const editPlaylist = async (req,res) => {
    
}


const deletePlayList = async (req, res) => {
    const { playlistId } = req.body
    const playlist = await Playlist.findOne(
        {
            where:
            {playlistId:playlistId}
        }
    )
    await playlist.destroy()

    const playlists = await Playlist.findAll()
    res.status(200).json(playlists)


};


export { 
    getPlaylist,
    addPlaylist, 
    editPlaylist,
    deletePlayList,
}
