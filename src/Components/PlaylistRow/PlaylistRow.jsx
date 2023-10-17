import './playlistRow.css';
import axios from "axios";

const PlaylistRow = ({pl}) => {

    const deletePlaylist = async () => {
        const res = await axios.post("/api/deleteplaylist")
      }
    
    const editPlaylist = async () => {
        const res = await axios.post('api/playlists')
      }

    return (
        <div className="displayRow">
          <p id='timeStamp'> {pl.createdAt} </p>
          <p id='playlistName'> {pl.name} </p>
          <button className="rowButton" onClick={()=> editPlaylist} > edit </button>
          <button className="rowButton" onClick={()=> deletePlaylist} > delete </button>
        </div>
      )  
}

export default PlaylistRow