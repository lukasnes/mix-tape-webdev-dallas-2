import PlaylistRow from "../PlaylistRow/PlaylistRow"



const FriendsPlaylist = ({ pl, setPlaylist, setFriendId, setPageState, setLoadingState }) => {


    let playlistData = pl.map((pl) => {
        let { 
          playlist, 
          isFollowing, 
          hasLiked} = pl
        return <PlaylistRow 
        
        pl={ playlist }
        hasLiked={ hasLiked }
        setFriendId={setFriendId}
        setLoadingState={setLoadingState}
        isFollowing={ isFollowing } 
        setPlaylist={ setPlaylist } 
        key={ playlist.playlistId }
        setPageState={ setPageState } />

      })
      
      return playlistData
    }
    
export default FriendsPlaylist