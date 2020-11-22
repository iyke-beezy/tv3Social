import adminTypes from './admin.types'

const INITIALSTATE = {
    currentUser: null,
    uploadSuccess: false,
    uploadFailure: false,
    adminData: [],
    errorMsg: null
}

const adminReducer = (state = INITIALSTATE, action) => {
    switch(action.type) {
        case adminTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                uploadSuccess: action.payload
            }
        case adminTypes.ADD_USER_FAILURE:
            return {
                ...state,
                uploadFailure: action.payload
            }
        case adminTypes.ADMIN_DATA:
            return {
                ...state,
                adminData: action.payload
            }
        case adminTypes.RESET_AUTH_FORM:
            return {
                ...state,
                currentUser: null,
                uploadSuccess: true,
                uploadFailure: false,
                errorMsg: null,
                adminData: []
            }
        default:
            return state
    }

}

export default adminReducer