import PlaylistRow from "../PlaylistRow/PlaylistRow"
import { useState, useEffect } from "react"


const FriendsPlaylist = ({friendId}) => {

    const [playlist, setPlaylist] = useState([])

    useEffect(() => {
        const getMyList = async () => {
            let res 
            if(friendId !== null){
                res = await axios.get(`/api/playlists/${friendId}`)  
            }
            setPlaylist(res.data)
    }
        getMyList()}, [])

    let playlistData = playlist.map((pl) => {
        return <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
      })
      return playlistData
    }
    
export default FriendsPlaylist