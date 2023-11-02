import PlaylistRow from "../PlaylistRow/PlaylistRow"
// import axios from "axios"
// import { useState, useEffect } from "react"


const FriendsPlaylist = ({setPlaylist}) => {
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
        let {playlist, isFollowing, hasLiked} = pl
        return <PlaylistRow 
        pl={playlist}
        hasLiked={hasLiked}
        isFollowing={isFollowing} 
        setPlaylist={setPlaylist} 
        key={playlist.playlistId}
        setPageState={setPageState} />
      })
      return playlistData
    }
    
export default FriendsPlaylist