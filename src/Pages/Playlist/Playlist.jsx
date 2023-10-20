import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Header from "../../Components/Header/Header";
import { useLoaderData, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './playlist.css'


const Playlist = () => {

  const navigate = useNavigate()
  let {playlists} = useLoaderData();

  const [playlist, setPlaylist] = useState(playlists)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  let playlistData = playlist.map((pl) => {
    return <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
  })

  const createPlaylist = async () => {
      const res = await axios.post('/api/addnewplaylist')
      let newId = res.data.playlistId
      navigate(`/playlist/${newId}`) 
  }

  return  <>
            <header>
              <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </header>
            <main>
              <div id='playlistContainer'>
                {playlistData}
              </div>
              <div id='createPlaylistDiv'>
                <button id='createPlaylistButton' onClick={()=> createPlaylist()}> Create Playlist </button>
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;