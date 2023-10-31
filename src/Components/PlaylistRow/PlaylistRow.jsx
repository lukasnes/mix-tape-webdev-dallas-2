import { useNavigate } from 'react-router-dom';
import './playlistRow.css';
import axios from "axios";
import { useSelector } from 'react-redux';
import DelOrLike from '../DelOrLike/DelOrLike';
import FollowButton from '../Follow/Follow';
import { useEffect } from 'react';

const PlaylistRow = ({pl, setPlaylist, user, likeCount}) => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state=>state.loggedIn)

    // const deletePlaylist = async () => {
    //     if( isLoggedIn === true && userId === pl.userId ) {
    //        const res = await axios.post("/api/playlist/delete", {playlistId: pl.playlistId}) 
    //         setPlaylist(res.data)
    //     }
    // }  

    const followUserHandler = async () => {
        await axios.post(`/api/friend/toggle/${user.userId}`)

    }
       
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

   

    return isLoggedIn ? (
        <div id='playlistRow' className="displayRow" >
            <div id='timeStampDiv'>
                <p id='timeStamp'> {time(pl)} </p> 
            </div>

            <div id='playlistNameDiv' className='displayRow' onClick={(e) => editPlaylist()}>
                <p id='playlistName'> {pl.name} </p>                

            </div>
            <div id='deleteButtonDiv'>  
                <FollowButton friendId={pl.user.userId} user={pl.user.username}/>
            {/* <button id='userNameButton' className='button'
                onClick={followUserHandler}
                >
                {pl.user.username}
            </button> */}
            <div id='likeCountDiv'>
                <p id='likeCount'>likes:{pl.likeCount}</p>
            </div>
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
            <button id='userNameButton' className='button'>
                {pl.user.username}
            </button>
            <div id='likeCountDiv'>
                <p id='likeCount'>likes:{pl.likeCount}</p>
            </div>
                <DelOrLike pl={pl} setPlaylist={setPlaylist} /> 
            </div>
        </div>
      )    
}

export default PlaylistRow