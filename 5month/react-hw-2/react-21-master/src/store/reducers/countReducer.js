
const initialState = {
    count: 0
}

export const actions = {
    INC: 'inc',
    DEC: 'dec'
}

export const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.INC: {
            return {...state, count: state.count + 1}
        }
        case actions.DEC: {
            return {...state, count: state.count - 1}
        }
        default:
            return state
    }
}