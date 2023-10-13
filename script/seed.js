import { Mixtape, db } from "../database/model";

console.log('Syncing Database...')

await db.sync ({force: true})

console.log('Seeding database...')

const sampleMixtape = []

for(let i = 0; i < 10; i++){
    let mixtape = await Mixtape.create({
        mixtape_name:`sampleMixTape${i}`
    })

    sampleMixtape.push(mixtape)
    
    const sampleSong = [
        {
            album: "Thriller",
            artist: "Michael Jackson",
            name: "Billie Jean",
            position: 1
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
            album: "The Dark Side of the Moon",
            artist: "Pink Floyd",
            name: "Money",
            position: 4
        },
        {
            album: "Rumours",
            artist: "Fleetwood Mac",
            name: "Go Your Own Way",
            position: 5
        }
    ];
}