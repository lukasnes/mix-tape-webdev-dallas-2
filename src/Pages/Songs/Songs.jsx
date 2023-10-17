import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SongsRow from "../../Components/SongsRow/SongsRow";
import { useState } from "react";

const Songs = () => {
  let { playlist } = useLoaderData();
  console.log(playlist);

  const [songs, setSongs] = useState(playlist.songs);

  let songsDisplay = songs.map((item) => {
    return <SongsRow song={item} songs = {songs} setSongs = {setSongs} />;
  });

  return (
    <div>
      <h1>{playlist.name}</h1>
      <button>Edit</button>
      {songsDisplay}
      <button className="rowButton">Add</button>
    </div>
  );
};

export default Songs;
