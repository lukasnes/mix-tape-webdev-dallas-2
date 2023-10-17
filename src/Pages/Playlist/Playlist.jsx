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

  let playlistData = playlist.map((pl) => {
    return <PlaylistRow pl={pl} setPlaylist={setPlaylist} />
  })

  const createPlaylist = async () => {
      const res = await axios.post('/api/addnewplaylist')
      let newId = res.data.playlistId
      navigate(`/playlist/${newId}`) 

  }

  return  <>
            <header>
              <Header />
            </header>
            <main>
              <div id='playlistContainer'>
                {playlistData}
              </div>
              <div id='createPlaylistDiv'>
                <button id='createPlaylistButton' onClick={(e)=> createPlaylist()}> Create Playlist </button>
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;