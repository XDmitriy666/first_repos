
const initialState = {
    users: [ 'John' ],
    posts: []
}

export const actionsUsers = {
    push: 'push',
    delete: 'delete',
    getPosts: 'getPosts'
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsUsers.push: {
            return {...state, users: [...state.users, action.payload]}
        }
        case actionsUsers.delete: {
            return {...state, users: [...state.users.filter((item) => item !== action.payload)]}
        }
        case actionsUsers.getPosts: {
            return {...state, posts: action.payload}
        }
        default:
            return state
    }
}

export const usersPush = (payload) => ({type: actionsUsers.push, payload})
export const usersDelete = (payload) => ({type: actionsUsers.delete, payload})

export const postsFill = (payload) => ({type: actionsUsers.getPosts, payload})