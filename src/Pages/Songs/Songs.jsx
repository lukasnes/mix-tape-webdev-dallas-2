import { useLoaderData } from "react-router-dom";


const Songs = () =>{
    let {songs} = useLoaderData()
    console.log(songs)
    
   
     let songsDisplay= songs.map((item)=>{
        return(
            <div>
           <p>{item.songId}</p>
           <button className="rowButton">Add</button> 
           <button className="rowButton">Delete</button> 
        </div>)})
    
            return (
                <div>
                    {songsDisplay}
                </div>
            )
   
   
    }

export default Songs;