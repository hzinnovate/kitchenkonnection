import firebase from '../../config/firebase'
const database = firebase.database();

const updateUser = (user) => {
    return (dispatch, getState) => {
        dispatch({ type: 'UPDATE_USER', user: user })
    }
}

const removeUser = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'REMOVE_USER', user: null })
    }
}
const getAllUsers = () => {
    return (dispatch, getState) => {
        database.ref('users').on('value', (e) => {
            let data = e.val()
            if (data) {
                dispatch({ type: 'ALL_USERS', allUsers: data })
            } else {
                dispatch({ type: 'ALL_USERS', allUsers: null })
            }
        })
    }
}

export {
    updateUser,
    removeUser,
    getAllUsers
}