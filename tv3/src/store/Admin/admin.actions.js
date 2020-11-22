import adminTypes from './admin.types'

const apiUrl = 'http://localhost:5000'

export const uploadData = ({ age, gender, region }) => async dispatch => {
    const response = await fetch(`${apiUrl}/upload`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ age, gender, region })
    })
    console.log(await response.json())
    if (response.ok) {
        dispatch({
            type: adminTypes.ADD_USER_SUCCESS,
            payload: true
        })
    }
    dispatch({
        type: adminTypes.ADD_USER_FAILURE,
        payload: true
    })

    dispatch({
        type: adminTypes.ADD_USER_FAILURE_MSG,
        payload: response.data.message
    })

}

export const resetAuthForm = () => ({
    type: 'RESET_AUTH_FORM',
})

export const downloadData = () => async dispatch => {
    const response = await fetch(`${apiUrl}/api/getData`, {
        method: 'POST',
    })

    if (response.ok) {
        dispatch({
            type: adminTypes.ADMIN_DATA,
            payload: response.data.payload
        })
    }
}
