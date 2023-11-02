import PlaylistRow from "../PlaylistRow/PlaylistRow"

const HotList = ({
  allPlaylist, 
  setFriendId,
  setLoadingState,
  setPageState}) => {
  
    let playlistData = allPlaylist.map((pl) => {
      
      let {
        playlist, 
        isFollowing, 
        hasLiked} = pl
      
      return <PlaylistRow
      isFollowing = { isFollowing }
      setFriendId={setFriendId}
      setLoadingState={setLoadingState}
      hasLiked = { hasLiked } 
      user={playlist.user}
      pl={playlist}  
      key={playlist.playlistId}
      setPageState={setPageState} />
      
    })
    
    // console.log(playlistData)
    return playlistData
  }
export default HotList