import React from 'react'
import HotList from '../HotList/HotList'
// import Container from 'react-bootstrap/Container'

export default function Hero ({allPlaylist, setPlaylist, setPageState, setFriendId, setLoadingState}) {
return (
    <div>
        <h4> Hear what's trending in the Mix-Co community... </h4>   
        <HotList allPlaylist={allPlaylist} 
        setPlaylist= {setPlaylist} 
        setFriendId={setFriendId}
        setLoadingState={setLoadingState}
        setPageState={setPageState}/>    
    </div>
)
}