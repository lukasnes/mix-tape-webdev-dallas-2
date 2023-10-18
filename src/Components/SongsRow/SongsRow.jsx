import axios from "axios";
import { useRef } from "react";

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
    <div>
      <p>
        Song name: {song.name} <br />
        Artist: {song.artist} <br /> Album: {song.album}
      </p>
      <img src={song.imgUrl}/>
      <div>
      <audio ref={useRef()} src={song.preview} controls />
      </div>
      <button
        className="rowButton"
        onClick={() => {
          deleteSongs(song.songId);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SongsRow;
