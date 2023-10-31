import React from 'react'
import HotList from '../HotList/HotList'
// import Container from 'react-bootstrap/Container'

export default function Hero ({pl, setPlaylist}) {
return (
    <div>
        <h4> Hear what's trending in the Mix-Co community... </h4>   
        <HotList pl={pl} setPlaylist= {setPlaylist}/>    
    </div>
)
}