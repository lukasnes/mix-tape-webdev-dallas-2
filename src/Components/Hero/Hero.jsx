import React from 'react'
import HotList from '../HotList/HotList'
import Container from 'react-bootstrap/Container'

export default function Hero ({pl, setPlaylist}) {
return (
    <div>
        <h2 className='text-muted text-center'> Hear what's trending in the Mix-Co community... </h2>   
        <HotList pl={pl} setPlaylist= {setPlaylist}/>    
    <Container>
        
    </Container>
        <h3></h3> 
    </div>
)
}