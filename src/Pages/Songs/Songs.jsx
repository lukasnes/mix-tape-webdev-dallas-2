import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SongsRow from "../../Components/SongsRow/SongsRow";
import { useState } from "react";
import "../Songs/Songs.css";
import SearchBar from "../../Components/Modal/AddSong/AddSong.jsx";
import AddSong from "../../Components/Modal/AddSong/AddSong.jsx";
import { useNavigate } from "react-router-dom";


const Songs = () => {
  let { playlist } = useLoaderData();
  const navigate = useNavigate();
  const [songs, setSongs] = useState(playlist.songs);
  const [playlistName, setPlaylistname] = useState(playlist.name)
  const [isEditing, setEditing] = useState(false);

  let songsDisplay = songs.map((item) => {

  const followUserHandler = async () => {
    await axios.post(`/api/friend/toggle/${user.userId}`)
  }

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
    await axios.post("/api/playlist/edit", {
      playlistId: playlist.playlistId,
      playlistname: playlistName,
    });
  };

  const addSong = () => {};

  return (
    <div>
      {isEditing ? (
        <div id="logo" className="title">
          <input 
            value={playlistName}
            onChange={(e) => setPlaylistname(e.target.value)}
          />
          <button onClick={(e) => EditPlaylistName()}>Submit</button>
        </div>
      ) : (
        <section className="playlist_active">
          <div className="header">
            <h1 id='logo'className="title">
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
            </h1>
              <h4 >
                {playlist.user.username}
              </h4>
          <div id='buttonRow'>
            <button className='button' onClick={()=>{
            navigate("/")
          }} >Home</button>
          <AddSong 
             plId = {playlist.playlistId}
             setSongs = {setSongs}
            />
          {/* <userDisplay /> */}
          <button className="button" onClick={()=>{}}>Follow</button>
          </div>

          </div>
          <div className="songsDisplay">
            {songsDisplay}
          </div>
        </section>
      )}
    </div>
  );
};

export default Songs;
