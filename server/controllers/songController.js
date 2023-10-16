import { Playlist, Song } from "../../database/model.js";

const playlistSong = async (req, res) => {
    const songs = await Song.findAll({ where: { playlistId:+req.params.id }});
    res.status(200).json(songs);
}

const addNewSong = async (req, res) => {
    const playlist = await Playlist.findByPk(+req.params.id);
    const createdSong = await playlist.createdSong( req.body );
    // const newSong = req.body;
    // const createdSong = await Song.findByPk({ where: { songId }});
    res.status(201).json(playlist);
};

const deleteSong =  async (req, res) => {
    let deletedSong = await Song.destroy({ where: req.params.songId });
    // await deleteSongs.destroy();
    res.status(200).json({ message: 'Song deleted successfully' });
}; 

export { playlistSong, addNewSong, deleteSong };