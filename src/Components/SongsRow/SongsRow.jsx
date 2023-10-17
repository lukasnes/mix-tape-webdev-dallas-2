import axios from "axios";

const SongsRow = ({ song, songs, setSongs }) => {
  const deleteSongs = (songId) => {
    axios.post(`/api/deletesong/${songId}`).then((res) => {
      let newSongs = [ ...songs ];
      console.log(songs)
      const index = newSongs.findIndex((item) => item.songId === songId);
      newSongs.splice(index, 1);
      setSongs(newSongs);
    });
  };

  return (
    <div>
      <p>{song.name}</p>
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