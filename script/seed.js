// create 3 playlists, 5 of the same song

// import util from 'util'
import { User, Playlist, Song, db } from '../database/model.js'

console.log('Syncing Database...')

await db.sync ({force: true})

console.log('Seeding database...')

// const samplePlaylist = []

for(let i = 0; i < 3; i++){
    const user = await User.create(
        {
            username: `testUser${i}`,
            email: `test${i}@email.com`,
            password: `test`
        }
    )

    for(let i = 0; i < 3; i++){
        const playlist = await user.createPlaylist({
            name:`samplePlaylist${i}`
        })
        
        // samplePlaylist.push(playlist)
        
        const sampleSongs = [
            {
                album: "Hotel California",
                artist: "Eagles",
                name: "Hotel California",
                position: 1,
            },
            
            {
                album: "Nevermind",
                artist: "Nirvana",
                name: "Drain You",
                position: 2
            },
            {
                album: "Abbey Road",
                artist: "The Beatles",
                name: "Come Together",
                position: 3
            },
            {
                album: "Purple Haze",
                artist: "Jimi Hendrix",
                name: "Purple Haze",
                position: 4,
            },
            {
                album: "Rumours",
                artist: "Fleetwood Mac",
                name: "Go Your Own Way",
                position: 5
            }
        ];
        
        for (const songData of sampleSongs){
            const song = await playlist.createSong(songData)
            console.log(song)
            
        }
    }
}
    
    
await db.close()
console.log('Finished seeding database!')