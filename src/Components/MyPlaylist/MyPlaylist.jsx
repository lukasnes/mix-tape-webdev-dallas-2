import { useSelector } from "react-redux"
import PlaylistRow from "../PlaylistRow/PlaylistRow"
import { useEffect, useState } from 'react'
import axios from "axios"


const MyPlaylist = ({friendId}) => {

    const userId = useSelector(state=>state.userId)
    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        const getMyList = async () => {
            let res 
            if(friendId){
                res = await axios.get(`/api/playlists/${friendId}`)  
            } else {
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