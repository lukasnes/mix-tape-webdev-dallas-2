import { useLoaderData} from "react-router-dom"
import PlaylistRow from "../PlaylistRow/PlaylistRow"
import {  useEffect,   useState } from "react"
import axios from "axios"

const HotList = ({pl, setPlaylist, setPageState}) => {
  
  // console.log(pl)
  let playlistData = pl.map((pl) => {
    
  let {playlist, isFollowing, hasLiked} = pl

    return <PlaylistRow
    isFollowing = { isFollowing }
    hasLiked = { hasLiked } 
    user={playlist.user}
    pl={playlist} 
    setPlaylist={setPlaylist} 
    key={playlist.playlistId}
    setPageState={setPageState} />
    
  })

  return playlistData
}
export default HotList