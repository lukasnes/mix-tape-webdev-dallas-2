import { Navigate, useNavigate } from 'react-router-dom';
import './playlistRow.css';
import axios from "axios";

const PlaylistRow = ({pl}) => {

    const Navigate = useNavigate

    const deletePlaylist = async () => {
        const res = await axios.post("/api/deleteplaylist")
      }

    const editPlaylist = () => {

    }

    return (
        <div className="displayRow" onClick={(e) => editPlaylist}>
            <div id='timeStampDiv'>
                <p id='timeStamp'> {pl.createdAt} </p> 
            </div>
            <div id='playlistNameDiv'>
                <p id='playlistName'> {pl.name} </p>
            </div>
            <div id='deleteButtonDiv'>
                <button id='deletePlaylistButton' onClick={(e)=> deletePlaylist} > X </button>
            </div>
        </div>
      )     
}

export default PlaylistRow