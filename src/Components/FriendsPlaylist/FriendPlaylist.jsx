import PlaylistRow from "../PlaylistRow/PlaylistRow"
// import axios from "axios"
// import { useState, useEffect } from "react"


const FriendsPlaylist = ({friendId, pl, setPlaylist}) => {
    // const friendsId = useSelector((state) => state.friendId);

    // const [playlist, setPlaylist] = useState([])

    // useEffect(() => {
    //     const getMyList = async () => {
    //         let res 
    //         if(friendId !== null){
    //             res = await axios.get(`/api/playlists/${friendId}`)  
    //         }
    //         setPlaylist(res.data)
    // }
    //     getMyList()}, [])

    let playlistData = pl.map((pl) => {
        return <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
      })
      return playlistData
    }
    
export default FriendsPlaylist