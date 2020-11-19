import firebase from '../../config/firebase'
const database = firebase.database();


export const getAllKitchenProducts = () => {
    return (dispatch, getState) => {
        database.ref('kitchenProducts').on('value', (e) => {
            let data = e.val()
            if (data) {
                dispatch({ type: 'ALL_KITCHEN_PRODUCTS', allKitchenProducts: data })
            } else {
                dispatch({ type: 'ALL_KITCHEN_PRODUCTS', allKitchenProducts: null })
            }
        })
    }
}
