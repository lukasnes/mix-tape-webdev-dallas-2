import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import Header from "../../Components/Header/Header";
import HotList from "../../Components/HotList/HotList";
import { useLoaderData, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './playlist.css'
import FriendList from "../../Components/FriendList/FriendList";


const Playlist = () => {

  const navigate = useNavigate()
  // let {playlists} = useLoaderData();

  // const [playlist, setPlaylist] = useState(playlists)
  const [pageState, setPageState] = useState('hot')
  const [pageData, setPageData] = useState()
  const [friendId, setFriendId] = useState(null)

  // let playlistData = playlist.map((pl) => {
  //   return <PlaylistRow pl={pl} setPlaylist={setPlaylist} key={pl.playlistId} />
  // })

  useEffect(()=>{
      switch (pageState){
        case 'hot':
          setPageData(<HotList/>)
          break
        case 'friendsList':
          setPageData(<FriendList setPageState= {setPageState} setFriendId= {setFriendId} />)
          break
        case 'friendsPlaylist':
          setPageData()
          break
        case 'myPlaylist':
          setPageData()
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