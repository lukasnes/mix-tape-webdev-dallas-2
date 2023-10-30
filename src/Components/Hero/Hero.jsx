import React from 'react'
import HotList from '../HotList/HotList'
import Container from 'react-bootstrap/Container'

export default function Hero ({pl, setPlaylist}) {
return (
    <div>
<<<<<<< HEAD
        <h2 className='text-muted text-center'> Hear what's trending in the Mix-Co community... </h2>   
        <HotList pl={pl} setPlaylist= {setPlaylist}/>    
=======
        <h4> Hear what's trending in the Mix-Co community... </h4>   
        <HotList />    
>>>>>>> 8ff1c952aabc36d6e4828906bea4e2b0322963d1
    <Container>
        
    </Container> 
    </div>
)
}