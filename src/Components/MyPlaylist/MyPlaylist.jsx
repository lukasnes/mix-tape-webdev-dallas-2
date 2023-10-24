import { useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import PlaylistRow from "../PlaylistRow/PlaylistRow"
import axios from "axios"


const MyPlaylist = () => {

    const userId = useSelector(state=>state.userId)
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        const getMyList = async () => {
            let res 
            if(userId !== null){
                res = await axios.get(`/api/playlists/${userId}`) 
            }
            setPlaylist(res.data)
    }
        getMyList()}, [])

    let playlistData = playlist.map((pl) => {
        return <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
      })
      return playlistData
    }
    
export default MyPlaylist