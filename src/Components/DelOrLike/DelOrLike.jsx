import { useSelector } from "react-redux"
import { BsHeartFill } from 'react-icons/bs'
import axios from "axios"


const DelOrLike = ({pl, setPlaylist}) => {

    const userId = useSelector(state=>state.userId)
    const isLoggedIn = useSelector(state=>state.loggedIn)

    const deletePlaylist = async () => {
        if( isLoggedIn === true && userId === pl.user.userId ) {
           const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId}) 
           console.log(res)
            setPlaylist(res.data.playlists)
            // todo: setPlayList isnt working, needs to be put inot redux possibly
        }
    }  

    const likePlaylist = async () => {
        await axios.post(`/api/${userId}/like/${pl.playlistId}`)
    }
 console.log(pl)
    return userId === pl.user.userId ? (
        
        <button id='deletePlaylistButton' className="button roundButton" onClick={(e)=> deletePlaylist()} > X </button>
    ):(
        <button id='likePlaylistButton' className="button roundButton" onClick={(e)=> likePlaylist()}> <BsHeartFill/> </button>
    )
}

export default DelOrLike