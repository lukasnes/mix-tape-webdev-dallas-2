import axios from "axios";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../SongsRow/SongsRow.css";

// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import { ListGroupItem } from "react-bootstrap";


const SongsRow = ({ song, songs, setSongs }) => {

  const isLoggedIn = useSelector(state=>state.loggedIn)

  const deleteSongs = (songId) => {
    axios.post(`/api/deletesong/${songId}`).then((res) => {
      let newSongs = [...songs];
      console.log(songs);
      const index = newSongs.findIndex((item) => item.songId === songId);
      newSongs.splice(index, 1);
      setSongs(newSongs);
    });
  };

  return (
    <div className="songProps row">
      <div className="" id="albumCover">
        <img className="songImage" src={song.imgUrl} />
      </div>

        <div id='songInfo' className="row container">
          <p>
            Song name: {song.name} <br />
            Artist: {song.artist} <br />
            Album: {song.album}
          </p>
        </div>

        <div id='audioPreview' className="row container">
          <audio
            id="audioPreview"
            ref={useRef()}
            src={song.preview}
            controls
          />
        </div>
        
        {isLoggedIn ? (
          <div id='deleteButton'>
            < button className="button roundButton" onClick={()=>{}} > + </button>
          </div>
        ):(
          <div id='deleteButton'>
            < button className="button roundButton" onClick={()=>{deleteSongs(song.songId);}} > X </button>
          </div> 
          
        )}
      </div>
  );
};

export default SongsRow;
