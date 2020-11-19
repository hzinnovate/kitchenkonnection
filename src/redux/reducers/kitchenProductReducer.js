const kitchenProductReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ALL_KITCHEN_PRODUCTS': {
            return { ...state, allKitchenProducts: action.allKitchenProducts }
        }
        default: {
            return state
        }
    }
}

export default kitchenProductReducer