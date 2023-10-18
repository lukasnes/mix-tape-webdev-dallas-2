import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SongsRow from "../../Components/SongsRow/SongsRow";
import { useState } from "react";
import "../Songs/Songs.css"
import SongsModal from "./SongsModal";

const Songs = () => {
  let { playlist } = useLoaderData();
  console.log(playlist);

  const [songs, setSongs] = useState(playlist.songs);
  console.log(songs)
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
      playlistname: playlistName,
    });
  };

  const addSong = () => {};

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            value={playlistName}
            onChange={(e) => setPlaylistname(e.target.value)}
          />
          <button onClick={(e) => EditPlaylistName()}>Submit</button>
        </div>
      ) : (
        <div>
          <h1>{playlistName}</h1>
          <button onClick={(e) => setEditing(true)}>Edit</button>
        </div>
      )}
      {songsDisplay}
      <div className="container">
        <form>
          <div className="row">
            <div className="col-25">
              <label for="fname">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your song.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Artist</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your favorite artist"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="country">Album</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="album"
                name="album"
                placeholder="Your album"
              />
            </div>
          </div>
            <SongsModal/>
          <button className="addSongButton">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Songs;


  /* <div className="addSongForm">
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
    </div> */

