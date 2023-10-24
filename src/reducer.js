
const initialState = {
    loggedIn: false
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