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
                  <button class="windowButtons" id='topButton'> Top </button>
                  <button class="windowButtons" id='loginButton'> Login </button>
                  <button class="windowButtons" id='friendsButton'> Friends </button>
                </div>
                <div id='tapeBottom'>
                  <div></div>
                </div>
              </div>

            </header>

            <main>
              <div id='playlistList'>
                {playlistRow}
              </div>
            </main>

            <footer></footer>
          </>;
};

export default Playlist;
