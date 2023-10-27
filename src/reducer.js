import axios from "axios"

let {data: {loggedIn, userId}} = await axios.get("/api/auth/status")

const initialState = {
    loggedIn: loggedIn,
    userId: userId
}

export default function reducer (state = initialState, action){
    switch(action.type) {
        case 'login' :
            return {...state, loggedIn: true, userId: action.payload.userId }
        case 'logout' :
            return {...state, loggedIn: false, userId: null }
        default:
            return state
    }
}