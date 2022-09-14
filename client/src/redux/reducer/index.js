import {} from "../actions"

const initialState = {
    test_state: ''
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'test':
            return {
                ...state,
                test_state: action.payload
            }

        default:
            return state
    }
}
