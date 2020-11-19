import firebase from '../../config/firebase';
// const auth = firebase.auth();
// const storage = firebase.storage();
const database = firebase.database();



export const uploadKitchenProducts = (obj) => {
    return new Promise((resolve, reject) => {
        let currentDataUid = new Date().getTime()
        obj.uid = currentDataUid
        database.ref(`kitchenProducts/${obj.kitchenUid}/${currentDataUid}`).set(obj).then((e) => {
            resolve(`Your Product Uploaded`)
        }).catch(e => {
            reject(e)
        })
    })
}
