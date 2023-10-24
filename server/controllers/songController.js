import { 
    Playlist, 
    Song } from "../../database/model.js"

    const playlistSong = async (req, res) => {
    const playlist = await Playlist.findOne(
        { 
            where: { playlistId: +req.params.id },
            include: { 
                model: Song, 
                attributes: 
                [
                    'name', 
                    'artist', 
                    'album', 
                    'position', 
                    'songId', 
                    'preview', 
                    'imgUrl'
                ] 
            }
        }
        )

        console.log(playlist)
    res.status(200).json(playlist)
}

    const addNewSong = async (req, res) => {
    const playlist = await Playlist.findByPk(+req.params.id)
    const createdSong = await playlist.createdSong( req.body )
    // const newSong = req.body;
    // const createdSong = await Song.findByPk({ where: { songId }});
    res.status(201).json(playlist);
};

const deleteSong =  async (req, res) => {
    await Song.destroy(
        { 
            where:
            { songId: +req.params.songId} 
        }
        );
    // await deleteSongs.destroy();
    res.status(200).json({ message: 'Song deleted successfully' })
}; 

export { 
    playlistSong, 
    addNewSong, 
    deleteSong };