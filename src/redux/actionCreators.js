import * as actions from './actionTypes'

const addUser = (name) => {
    return {
        type: actions.ADD_USER,
        name: name
    }
}

const addRole = (role) => {
    return {
        type: actions.ADD_ROLE,
        role: role
    }
}

const addToken = (token) => {
    return {
        type: actions.ADD_TOKEN,
        token: token
    }
}

const addRefreshToken = (refreshToken) => {
    return {
        type: actions.ADD_REFRESH_TOKEN,
        refreshToken: refreshToken
    }
}

const removeUser = () => {
    return {
        type: actions.REMOVE_USER
    }
}

const addCurrentEvent = (event) => {
    return {
        type: actions.ADD_CURRENT_EVENT,
        event: event
    }
}

export { 
    addUser,
    addRole,
    addToken,
    addRefreshToken,
    removeUser, 
    addCurrentEvent
}
