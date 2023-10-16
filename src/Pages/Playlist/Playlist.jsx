import { useLoaderData } from "react-router-dom";
import './playlist.css'

const Playlist = () => {
  let {playlists} = useLoaderData();
  console.log(playlists)


    let playlistData = playlists.map((pl) => {
      return (
        <div className="displayRow">
          <p id='timeStamp'> {pl.createdAt} </p>
          <p> {pl.name} </p>
          <button className="rowButton"> edit </button>
          <button className="rowButton"> delete </button>
        </div>
      )
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
                  <div></div>
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
