import { 
    Playlist, 
    Song, 
User
} from "../../database/model.js"

    const playlistSong = async (req, res) => {
    const playlist = await Playlist.findOne(
        { 
            where: { playlistId: +req.params.id },
            include: [
                { 
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
            },
            {
                model:User,
            attributes:
            [
                'userId',
                'username',
            ]
        }
        ]
        }
        )

        console.log(playlist)
    res.status(200).json(playlist)
}

    const addNewSong = async (req, res) => {
    let playlist = await Playlist.findByPk(+req.params.id)
    const createSong = await playlist.createSong( req.body )
        playlist = await Playlist.findOne(
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