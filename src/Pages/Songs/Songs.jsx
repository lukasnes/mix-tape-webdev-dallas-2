import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SongsRow from "../../Components/SongsRow/SongsRow";
import { useState } from "react";
import "../Songs/Songs.css";
import AddSong from "../../Components/Modal/AddSong/AddSong.jsx";
import SongsModal from "./SongsModal";

const Songs = () => {
  let { playlist } = useLoaderData();
  console.log(playlist);

  const [songs, setSongs] = useState(playlist.songs);
  console.log(songs);
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
        <section className="playlist_active">
          <div className="header">
            <h1 className="title">
              {playlistName}
              <svg
                className="editPlaylistButton"
                onClick={(e) => setEditing(true)}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
              </svg>
              {/* <button
                className="editPlaylistButton"
                onClick={(e) => setEditing(true)}
              >
                Edit
              </button> */}
            </h1>
          </div>
          <div className="songsDisplay">
            {songsDisplay}
            <AddSong />
          </div>
        </section>
      )}
    </div>
  );
};

export default Songs;
