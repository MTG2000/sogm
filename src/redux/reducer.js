import * as actions from "./actionTypes"

const initialState = {
    username: undefined,
    role: "",
    token: "",
    refreshToken: "",
    currentEvent: {
        name: 'Boots and hearts Music Festival, Toronto',
        img: 'https://pbs.twimg.com/profile_images/1204169072029700097/VYkBx17M_400x400.jpg',
        owner: 'Tolupe Oba-Akosille',
        date: '17-04-2021',
        description: 'Ticket Volume or Total tickets tracks all tickets in your support queue over a period of time. A variation of this metric is total conversation, which counts all engagement with.',
        status: 'Canceled',
    },
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_USER:
            return {
                ...state,
                username: action.name
            }

        case actions.ADD_ROLE:
            return {
                ...state,
                role: action.role
            }

        case actions.ADD_TOKEN:
            return {
                ...state,
                token: action.token
            }

        case actions.ADD_REFRESH_TOKEN:
            return {
                ...state,
                refreshToken: action.refreshToken
            }

        case actions.REMOVE_USER:
            return {
                ...state,
                username: undefined,
                role: '',
                token: ''
            }

        case actions.ADD_CURRENT_EVENT:
            return {
                ...state,
                currentEvent: action.event
            }
    
        default: return state
    }
} 

export default reducer
