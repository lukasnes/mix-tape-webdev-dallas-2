import axios from "axios";
import { useRef } from "react";
import "../SongsRow/SongsRow.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import FriendList from "../FriendList/FriendList.jsx";

const SongsRow = ({ song, songs, setSongs }) => {
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
    <div className="songProps">
      <div id="albumCover">
        <img className="songImage" src={song.imgUrl} />
      </div>

      <div id="songInfo">
        <p>
          Song name: {song.name} <br />
          Artist: {song.artist} <br />
          Album: {song.album}
        </p>
      </div>
      <div id="audioPreview">
        <audio
          className="audioPreview"
          ref={useRef()}
          src={song.preview}
          controls
        />
      </div>
      <div id="deleteButton">
        <a
          onClick={() => {
            deleteSongs(song.songId);
          }}
          href="#"
          className="deleteButton"
        >
          <ion-icon name="remove-outline"></ion-icon>
          <ion-icon name="close"></ion-icon>
          {/* <span></span> */}
        </a>
      </div>
    </div>
  );
};

export default SongsRow;
