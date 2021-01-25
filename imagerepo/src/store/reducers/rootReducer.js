import authReducer from './authReducer'
import imageReducer from './imageReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    image: imageReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer