import { useLoaderData} from "react-router-dom"
import PlaylistRow from "../PlaylistRow/PlaylistRow"
import {  useEffect,   useState } from "react"
import axios from "axios"

const HotList = ({pl, setPlaylist}) => {

let {playlists} = useLoaderData()

// const [playlist, setPlaylist] = useState(playlists)

// useEffect(() => {
//   const getPlaylist = async () => {
//     let res
//     res = await axios.get('/api/likes/top')
//     // console.log(res.data)
//     setPlaylist(res.data)
//   }
//   getPlaylist()
// }, [])

let playlistData = pl.map((pl) => {
console.log(pl)

    return <PlaylistRow 
    user={pl.user}
    pl={pl} 
    setPlaylist={setPlaylist} 
    key={pl.playlistId} />
    
  })

  return playlistData
}
export default HotList