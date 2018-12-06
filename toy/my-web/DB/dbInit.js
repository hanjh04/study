import firebase from 'firebase'
import 'firebase/firestore'
import { firebaseConfig } from './dbConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()