// create 3 playlists, 5 of the same song

// import util from 'util'
import axios from 'axios'
import { User, Playlist, Song, db } from '../database/model.js'

console.log('Syncing Database...')

await db.sync ({force: true})

console.log('Seeding database...')




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
        
        
        const sampleSongs = [
            {
                album: "Hotel California",
                artist: "Eagles",
                track: "Hotel California",

            },
            
            {
                album: "Believe",
                artist: "Cher",
                track: "Believe",

            },
            {
                album: "A Little Bit of Mambo",
                artist: "Lou Bega",
                track: "Mambo No. 5",

            },
            {
                album: "Sunshine on Leith",
                artist: "The Proclaimers",
                track: "500 Miles",

            },
            {
                album: "Whenever You Need Somebody",
                artist: "Rick Astley",
                track: "Never Gonna Give You Up",

            }
        ];
        


        let apiData = await Promise.all(
            sampleSongs.map( async (song, index)=> {
                let queryString = "https://api.deezer.com/search?q="
                for (let key in song){
                    if(key !== 'track'){
                        queryString += `${key}:"${song[key]}" `
                    } else {
                        queryString += `${key}:"${song[key]}"`
                    }
                }
                let {data} = await axios.get(queryString)
                // console.log(data.data[0])
                let { title: name, preview, artist: { name: artist }, album: { title: album, cover_medium: imgUrl} } = data.data[0]
                return {
                    name, 
                    preview,
                    artist,
                    album,
                    imgUrl,
                    position: index + 1
                }
            })

        )
console.log(apiData)

        for (const songData of apiData){
            const song = await playlist.createSong(songData)
            console.log(song)
            
        }
    }
}
    
    
await db.close()
console.log('Finished seeding database!')