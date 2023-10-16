import { useLoaderData } from "react-router-dom";

const Playlist = () => {
  let playlist = useLoaderData();

  const playlistRows = () => {
    let playlistData = playlist.map()
    return (
      <div>
        <p id='timeStamp'></p>
        <p>{playlistData}</p>
        <button className="rowButton"> edit </button>
        <button className="rowButton"> delete </button>
      </div>
    )
  }

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
                {playlistRows}
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;
