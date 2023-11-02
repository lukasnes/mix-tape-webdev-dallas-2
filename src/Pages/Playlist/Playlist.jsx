import Header from "../../Components/Header/Header"
import Hero from "../../Components/Hero/Hero"
import MyPlaylist from "../../Components/MyPlaylist/MyPlaylist"
import FriendList from "../../Components/FriendList/FriendList"
import FriendsPlaylist from "../../Components/FriendsPlaylist/FriendPlaylist"
import Loading from "../../Components/Loading/Loading"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import "./playlist.css"

const Playlist = () => {
 
  const navigate = useNavigate()
  const userId = useSelector((state) => state.userId)
  const friendsId = useSelector((state) => state.friendId)
  const [pageState, setPageState] = useState("loading")
  const [pageData, setPageData] = useState()
  const [friendId, setFriendId] = useState(null)
  const [playlist, setPlaylist] = useState([])
  const [friendlist, setFriendList] = useState([])
  const [loadingState, setLoadingState]= useState("hot")
  

  useEffect(() => {
      switch (pageState) {
        
        case "hot":
          setPageData(<Hero 
            setFriendId={setFriendId}
            setLoadingState={setLoadingState}
            allPlaylist={playlist} 
            setPageState={setPageState} />)
          break
  
        case "friendsList":
          setPageData(
            <FriendList
              setPageState={setPageState}
              setLoadingState={setLoadingState}
              setFriendId={setFriendId}
              friends={friendlist}
              allPlaylist={playlist}
              setPlaylist={setPlaylist}
            />
          )
          break
  
        case "friendsPlaylist":
          setPageData(
            <FriendsPlaylist
              setFriendId={setFriendId}
              pl={playlist}
              setLoadingState={setLoadingState}
              friendId={friendId}
              allPlaylist={playlist}
              setPageState={setPageState}
            />
          )
          break
  
        case "myPlaylist":
          setFriendId(null)
          setPageData( <MyPlaylist 
            setFriendId={setFriendId}
            setLoadingState={setLoadingState}
            allPlaylist={playlist} 
            setPageState={setPageState} />)
          break

          case "loading":
            setPageData(<Loading 
              loadingState={loadingState} 
              setPageState={setPageState} 
              setPlaylist={setPlaylist} 
              friendId={friendId} 
              setFriendList={setFriendList} />)
      }
  }, [pageState])

  const createPlaylist = async () => {
    const res = await axios.post("/api/playlist/add")
    console.log(res.data.playlistId)
    let newId = res.data.playlistId
    navigate(`/playlist/${newId}`)
  }

  return (
    <>
      <header>
        <Header 
        setPageState={setPageState} 
        setLoadingState ={setLoadingState} />
      </header>
      <main>
        <div id="playlistContainer">{pageData}</div>
        <div id="createPlaylistDiv">
          <button
            id="createPlaylistButton"
            className="button"
            onClick={() => createPlaylist()}
          >
            {" "}
            Create Playlist{" "}
          </button>
        </div>
      </main>

      <footer></footer>
    </>
  );
};

export default Playlist;
