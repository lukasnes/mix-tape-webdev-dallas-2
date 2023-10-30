import { useState } from "react";

const userDisplay = (User) => {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <div>
            <button 
            id = "followButton"
            className= "button" 
            // onClick= {() => {

            // }}
            > Follow 
            </button>
        </div>
    )
};

export default userDisplay;