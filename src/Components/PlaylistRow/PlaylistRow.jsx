import { useNavigate } from 'react-router-dom';
import './playlistRow.css';
import axios from "axios";

const PlaylistRow = ({pl, setPlaylist}) => {

    const navigate = useNavigate()

    const deletePlaylist = async () => {
        const res = await axios.post("/api/deleteplaylist", {playlistId: pl.playlistId})
        setPlaylist(res.data)
    }  
        
    const editPlaylist = async () => {
        navigate(`/api/playlist/${pl.playlistId}`)
    }

    return (
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
      )     
}

export default PlaylistRow