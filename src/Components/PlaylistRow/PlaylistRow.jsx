import { useNavigate } from 'react-router-dom';
import './playlistRow.css';
import axios from "axios";
import { useSelector } from 'react-redux';

const PlaylistRow = ({pl, setPlaylist}) => {

    const navigate = useNavigate()
    const userId = useSelector(state=>state.userId)
    const isLoggedIn = useSelector(state=>state.loggedIn)

    const deletePlaylist = async () => {
        if( isLoggedIn === true && userId === pl.userId ) {
           const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId}) 
            setPlaylist(res.data)
        }
    }  
        
    const editPlaylist = async () => {
        navigate(`/playlist/${pl.playlistId}`)
    }

    const time = (pl) => {
        let isoDate = pl.createdAt
        var d = new Date(isoDate)
       return d    
    }
    
    return isLoggedIn ? (
        <div className="displayRow" >
            <div id='timeStampDiv'>
                <p id='timeStamp'> {pl.createdAt} </p> 
            </div>
            <div id='playlistNameDiv' onClick={(e) => editPlaylist()}>
                <p id='playlistName'> {pl.name} </p>
            </div>
            <div id='deleteButtonDiv'>
                <button id='deletePlaylistButton' onClick={(e)=> deletePlaylist()} > X </button>
            </div>
        </div>
      ) : (
        <div className="displayRow" >
            <div id='timeStampDiv'>
                <p id='timeStamp'> {pl.createdAt} </p> 
            </div>
            <div id='playlistNameDiv' onClick={(e) => editPlaylist()}>
                <p id='playlistName'> {pl.name} </p>
            </div>
            <div id='deleteButtonDiv'>  
            </div>
        </div>
      )    
}

export default PlaylistRow