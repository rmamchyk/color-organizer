import { ADD_COLOR, REMOVE_COLOR, RATE_COLOR } from '../actions'

export const color = (state = {}, action) => {
    switch (action.type) {
        case ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default :
            return state
    }
}

export const colors = (state = [], action) => {
    switch (action.type) {
        case ADD_COLOR :
            return [
                ...state,
                color({}, action)
            ]
        case RATE_COLOR :
            return state.map(
                c => color(c, action)
            )
        case REMOVE_COLOR :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}