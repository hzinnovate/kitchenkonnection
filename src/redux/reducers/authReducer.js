const reducer = (state = {}, action) => {
    switch(action.type){
        case 'UPDATE_USER' : {
            return {...state, kitchenKonnectionUser: action.user}
        }
        case 'REMOVE_USER' : {
            return {...state, kitchenKonnectionUser: null}
        }
        default: {
            return state
        }
    }
}

export default reducer