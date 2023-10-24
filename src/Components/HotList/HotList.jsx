import { useLoaderData } from "react-router-dom"
import PlaylistRow from "../PlaylistRow/PlaylistRow"
import { useState } from "react"


const HotList = () => {

let {playlists} = useLoaderData()

const [playlist, setPlaylist] = useState(playlists)

let playlistData = playlist.map((pl) => {
    return <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
  })

  return playlistData
}

export default HotList