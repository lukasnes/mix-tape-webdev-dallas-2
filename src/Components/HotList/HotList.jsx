import { useLoaderData} from "react-router-dom"
import PlaylistRow from "../PlaylistRow/PlaylistRow"
import {  useEffect,   useState } from "react"
import axios from "axios"

const HotList = ({pl, setPlaylist}) => {


console.log(pl)
let playlistData = pl.slice(0,4).map((pl) => {

    return <PlaylistRow 
    user={pl.user}
    pl={pl} 
    setPlaylist={setPlaylist} 
    key={pl.playlistId} />
    
  })

  return playlistData
}
export default HotList