/* import axios from 'axios' */

export const getState = () => {
    return (dispatch) => {
        return dispatch({
            type: 'test',
            payload: 'test state'
        })
    }
}