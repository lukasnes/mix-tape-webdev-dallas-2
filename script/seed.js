
import axios from 'axios'
import { User, 
    FriendList,
    Playlist,
    Likes, db } from '../database/model.js'
    

console.log('Syncing Database...')

await db.sync ({force: true})

console.log('Seeding database...')
    
    
const usernames = [
    'RockStar82',
    'MusicFan99',
    'BluesBob5',
    'GuitarGuy2002',
    'PunxPop09',
    'FunkyGroover73',
    'JazzyJeff44',
    // 'RhythmQu33n',
    // 'S0ulS1nger22',
    // 'Country1Chords',
    // 'EDMBeatGuy45',
    // 'PopHarmonyPrince',
    // 'RaveDancer4U',
    // '22ReggaeVibes',
    // '99PianoKeys',
    // 'DrumBeatsRUs',
  ]
    
    
for(let i = 1; i < usernames.length; i++){
    const user = await User.create(
        {
            username: usernames[i],
            email: `test${i}@email.com`,
            password: `test`
        })
     
            
    //Sample FriendList data
    const friendList = await FriendList.create({
        userId: user.userId
        })


    for(let i = 1; i < 3; i++){
        const playlist = await user.createPlaylist({
            name:`Sample Playlist ${i}`,
            likeCount:0,
        })
        
        
    const sampleSongs = [
        {
            album: "The Roaring Silence",
            artist: "Manfred Mann Earth Band",
            track: "Blinded by the Light",

        },
        
        {
            album: "Uptown Special",
            artist: "Bruno Mars",
            track: "Uptown Funk",

        },
        {
            album: "A Little Bit of Mambo",
            artist: "Lou Bega",
            track: "Mambo No. 5",

        },


        {
            album: "Whenever You Need Somebody",
            artist: "Rick Astley",
            track: "Never Gonna Give You Up",

        }
    ]
        

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
                console.log(data)
                console.log(song)
                let { 
                    title: name, 
                    preview, 
                    artist: { name: artist }, 
                    album: { title: album, cover_medium: imgUrl} 
                } = data.data[0]
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
        // console.log(apiData)

        for (const songData of apiData){
            const song = await playlist.createSong(songData)
            // console.log(song)
        }
        }
        // console.log(user)
    }




const randomNumber = () => {
    return Math.ceil(Math.random() * 8)
}
console.log(randomNumber())

for ( let i = 1; i < 5; i++){
    const playlistId = randomNumber()
    const like = await Likes.create({
        userId: i,
        playlistId: playlistId
    })
    console.log(like)   

    const playlist = await Playlist.findOne({
        where:{
            playlistId: playlistId,
        },

    })

    playlist.likeCount++
    playlist.save()
    console.log(playlist)
}


for( let i = 1; i < 5; i++ ) {

    let randInt = Math.ceil(Math.random() * 4)
    console.log("inside this mess")
    while (randInt === i ){
        randInt = Math.ceil(Math.random() * 4)
        console.log(randInt, "in while loop")
    }
    console.log(randInt)
    const friendlist = await FriendList.findOne({
        where: {
            userId: i
        }
    }
    )
    const friend = await friendlist.createFriend({
        userId: randInt
    })
    console.log(friend)  
}


await db.close()
console.log('Finished seeding database!')