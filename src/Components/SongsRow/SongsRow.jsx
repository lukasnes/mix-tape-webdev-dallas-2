import axios from "axios";
import { useRef } from "react";
import "../SongsRow/SongsRow.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";

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
        <p>
          Song name: {song.name} <br />
          Artist: {song.artist} <br />
          Album: {song.album}
        </p>
        <img className="songImage" src={song.imgUrl} />

        <audio
          className="audioPreview"
          ref={useRef()}
          src={song.preview}
          controls
        />

        <a
          onClick={() => {
            deleteSongs(song.songId);
          }}
          href="#"
          className="deleteButton"
        >
          <ion-icon name="remove-outline"></ion-icon>
          <ion-icon name="close"></ion-icon>
          <span>Remove Song</span>
        </a>
      </div>
   
  );
};

export default SongsRow;
