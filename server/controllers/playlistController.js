//get playlist function and return them
import axios from 'axios'
import { Playlist } from "../../database/model.js"

const getPlaylist = async (req, res) => {
    const playlists = await Playlist.findAll()
    res.status(200).json(playlists)
}

const addPlaylist = async (req, res) => {};

const deletePlayList = async (req, res) => {};


export { 
    getPlaylist,
    addPlaylist, 
    deletePlayList,
}