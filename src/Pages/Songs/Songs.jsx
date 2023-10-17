import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SongsRow from "../../Components/SongsRow/SongsRow";
import { useState } from "react"


const Songs = () => {
  let { playlist } = useLoaderData();
  console.log(playlist);

  const [songs, setSongs] = useState(playlist.songs);
  const [playlistName, setPlaylistname] = useState(playlist.name);
  const [isEditing, setEditing] = useState(false);

  let songsDisplay = songs.map((item) => {
    return (
      <SongsRow
        song={item}
        songs={songs}
        setSongs={setSongs}
        name={item.name}
        playlistName={playlistName}
        setPlaylistname={setPlaylistname}
      />
    );
  });

  const handleChange = (e) => {
    setPlaylistname(e.target.value);
  };

  const EditPlaylistName = async () => {
    setEditing(false);
    await axios.post("/api/editplaylist", {
      playlistId: playlist.playlistId,
      playlistname: playlist.name,
    });
  };

  return (
    <div>
      
      {isEditing ? (
        <header>
          <input
            value={playlistName}
            onChange={(e) => setPlaylistname(e.target.value)}
          />
          <button onClick={(e) => EditPlaylistName()}>Submit</button>
        </header>
      ) : (
        <header>
          <h1>{playlistName}</h1>
          <button onClick={(e) => setEditing(true)}>Edit</button>
        </header>
      )}
      {songsDisplay}
      <div className="addSongForm">
        <form>
          <label>Name:</label>
          <input type="text" id="name" name="name" />
          <label>Artist:</label>
          <input type="text" id="artist" name="artist" />
          <label>Album:</label>
          <input type="text" id="album" name="album" />
          <button className="addSongButton">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Songs;
