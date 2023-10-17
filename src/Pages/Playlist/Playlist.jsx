import PlaylistRow from "../../Components/PlaylistRow/PlaylistRow";
import { useLoaderData } from "react-router-dom";
import './playlist.css'

const Playlist = () => {

  let {playlists} = useLoaderData();
  let playlistData = playlists.map((pl) => {
    return <PlaylistRow pl={pl} />
  })

  return  <>
            <header>

              <div id='tapeMain'>
                <div id='window'>
                  <button className="windowButtons" id='topButton'> Top </button>
                  <button className="windowButtons" id='loginButton'> Login </button>
                  <button className="windowButtons" id='friendsButton'> Friends </button>
                </div>
                <div id='tapeBottom'>
                  <div>
                    <p>username/signup</p>
                  </div>
                </div>
              </div>

            </header>

            <main>
              <div id='playlistContainer'>
                {playlistData}
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;
