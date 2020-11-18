const reducer = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_USER' : {
            return {...state, kitchenKonnectionUser: action.user}
        }
        case 'REMOVE_USER' : {
            return {...state, kitchenKonnectionUser: null}
        }
        case 'ALL_USERS' : {
            return {...state, kitchenKonnectionAllUsers: action.allUsers}
        }
        default: {
            return state
        }
    }
}

export default reducer