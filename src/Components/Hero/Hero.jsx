import React from 'react'
import HotList from '../HotList/HotList'
// import Container from 'react-bootstrap/Container'

export default function Hero ({allPlaylist, setPlaylist}) {
return (
    <div>
        <h4> Hear what's trending in the Mix-Co community... </h4>   
        <HotList allPlaylist={allPlaylist} setPlaylist= {setPlaylist}/>    
    </div>
)
}