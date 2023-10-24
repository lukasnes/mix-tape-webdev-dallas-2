import Header from "../../Components/Header/Header";
import HotList from "../../Components/HotList/HotList";
import MyPlaylist from "../../Components/MyPlaylist/MyPlaylist";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './playlist.css'
import FriendList from "../../Components/FriendList/FriendList";


const Playlist = () => {

  const navigate = useNavigate()
  const [pageState, setPageState] = useState('hot')
  const [pageData, setPageData] = useState()

  useEffect(()=>{
      switch (pageState){
        case 'hot':
          setPageData(<HotList />)
          break
        case 'friendsList':
          setPageData(<FriendList />)
          break
        case 'friendsPlaylist':
          setPageData()
          break
        case 'myPlaylist':
          setPageData(<MyPlaylist />)
          break
      }
  }, [pageState])

  const createPlaylist = async () => {
      const res = await axios.post('/api/addnewplaylist')
      let newId = res.data.playlistId
      navigate(`/playlist/${newId}`) 
  }

  return  <>
            <header>
              <Header setPageState={setPageState} />
            </header>
            <main>
              <div id='playlistContainer'>
                {pageData}
              </div>
              <div id='createPlaylistDiv'>
                <button id='createPlaylistButton' onClick={()=> createPlaylist()}> Create Playlist </button>
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;