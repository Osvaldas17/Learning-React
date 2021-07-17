import { types } from './const'

const defaultState = {
    data: {},
}

export const learningRedux = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_DATA:
            return { ...state, data: action.payload }
        default:
            return state
    }
}