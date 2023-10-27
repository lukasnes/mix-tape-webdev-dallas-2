import { useNavigate } from 'react-router-dom';
import './playlistRow.css';
// import axios from "axios";
import { useSelector } from 'react-redux';
import DelOrLike from '../DelOrLike/DelOrLike';

const PlaylistRow = ({pl, setPlaylist}) => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state=>state.loggedIn)

    // const deletePlaylist = async () => {
    //     if( isLoggedIn === true && userId === pl.userId ) {
    //        const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId}) 
    //         setPlaylist(res.data)
    //     }
    // }  

        
    const editPlaylist = async () => {
        navigate(`/playlist/${pl.playlistId}`)
    }

    const time = (pl) => {
        if(pl.createdAt !== null) {
           let isoDate = (pl.createdAt).split("T", 1)[0] 
           return isoDate
        }    
    }

    const name = (pl) => {
        if(pl.name !== null) {
            return pl.name
        }
    }
    // fucntion name is not working

    console.log(pl)
    
    return isLoggedIn ? (
        <div id='playlistRow' className="displayRow" >
            <div id='timeStampDiv'>
                <p id='timeStamp'> {time(pl)} </p> 
            </div>
            <div id='playlistNameDiv' className='displayRow' onClick={(e) => editPlaylist()}>
                <p id='playlistName'> {name(pl)} </p>
            </div>
            <div id='deleteButtonDiv'>
                <DelOrLike pl={pl} setPlaylist={setPlaylist} />
            </div>
        </div>
      ) : (
        <div id='playlistRow' className="displayRow" >
            <div id='timeStampDiv'>
                <p id='timeStamp'> {time(pl)} </p> 
            </div>
            <div id='playlistNameDiv' className='displayRow' onClick={(e) => editPlaylist()}>
                <p id='playlistName'> {name(pl)} </p>
            </div>
            <div id='deleteButtonDiv'> 
                <DelOrLike pl={pl} setPlaylist={setPlaylist} /> 
            </div>
        </div>
      )    
}

export default PlaylistRow