import { useLoaderData } from "react-router-dom";

const Playlist = () => {
  let playlist = useLoaderData();

  const playlistRow = () => {

    return 
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
              <div id='playlistList'>
                {playlistRow()}
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;
