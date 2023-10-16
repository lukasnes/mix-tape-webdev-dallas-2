import { Song } from "../../database/model.js";

const playlistSong = async (req, res) => {
     
        const songs = await Song.findAll({ where: { playlistId: +req.params.id }});
        res.status(200).json(songs);
    
     
    
};

const addNewSong = async (req, res) => {
    try {
        const newSong = req.body;
        const createdSong = await Song.findByPk({ where: {}});
        res.status(201).json(createdSong);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteSong =  async (req, res) => {
    try {
        await songService.deleteSongById(req.params.id);
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { playlistSong, addNewSong, deleteSong };