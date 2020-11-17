const updateUser = (user) => {
    return (dispatch, getState) => {
    dispatch({ type: 'UPDATE_USER', user: user })
    }
}

const removeUser = () =>  {
    return (dispatch,  getState) => {
        dispatch({ type: 'REMOVE_USER', user: null })
    }
}

export {
    updateUser,
    removeUser
}