import { useSelector } from "react-redux"
import LikeButton from "../LikeButton/LikeButton"

import axios from "axios"


const DelOrLike = ({pl, setPlaylist, liked, likesCount, setLikesCount}) => {

    const userId = useSelector(state=>state.userId)
    const isLoggedIn = useSelector(state=>state.loggedIn)

    const deletePlaylist = async () => {
        if( isLoggedIn === true && userId === pl.user.userId ) {
           const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId}) 
           
            setPlaylist(res.data.playlists)
            // todo: setPlayList isnt working, needs to be put inot redux possibly
        }
    }  

    const likePlaylist = async () => {
        await axios.post(`/api/${userId}/like/${pl.playlistId}`)
    }
 
    return userId === pl.user.userId ? (
        
        <button id='deletePlaylistButton' className="button roundButton" onClick={(e)=> deletePlaylist()} > X </button>
    ):(
         <LikeButton  userId={pl.user.userId} setPlaylist={pl.playlistId} pl={pl} liked={liked} likesCount={likesCount} setLikesCount={setLikesCount}/>
    )
}

export default DelOrLike