import { useSelector } from "react-redux"
import { BsHeartFill } from 'react-icons/bs'
import axios from "axios"


const DelOrLike = ({pl, setPlaylist}) => {

    const userId = useSelector(state=>state.userId)
    const isLoggedIn = useSelector(state=>state.loggedIn)
    const [likedPlaylists, setLikedPlaylists] = useState([])

    const deletePlaylist = async () => {
        if( isLoggedIn === true && userId === pl.userId ) {
           const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId}) 
            setPlaylist(res.data)
            // todo: setPlayList isnt working, needs to be put inot redux possibly
        }
    }  

    const likePlaylist = () => {
        // if (isLoggedIn === true && !hasLikedPlayList(userId, pl.playlistId)){
        //     setLikedPlaylists([...likedPlaylists, { playlistId: pl.playlistId, userId: userId }])
        // }
    }

    return userId === pl.userId ? (
        <button id='deletePlaylistButton' className="button roundButton" onClick={(e)=> deletePlaylist()} > X </button>
    ):(
        <button id='likePlaylistButton' className="button roundButton" onClick={(e)=> likePlaylist}> <BsHeartFill/> </button>
    )
}

export default DelOrLike