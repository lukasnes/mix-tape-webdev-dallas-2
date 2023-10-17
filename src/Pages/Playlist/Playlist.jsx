import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Header from "../../Components/Header/Header";
import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import './playlist.css'


const Playlist = () => {

  const Navigate = useNavigate()

  let {playlists} = useLoaderData();

  let playlistData = playlists.map((pl) => {
    return <PlaylistRow pl={pl} />
  })

  const createPlaylist = async () => {
      const res = await axios.post('/api/addnewplaylist')
      let newId = res.data.playlistId
      Navigate(`/playlist/${newId}`) 

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