import firebase from 'firebase/app'
import 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBRUCVE6ifChnq0fNOEHvZI10O0b3vbgNU',
  authDomain: 'fir-1c0e2.firebaseapp.com',
  databaseURL: 'https://fir-1c0e2.firebaseio.com',
  projectId: 'fir-1c0e2',
  storageBucket: 'fir-1c0e2.appspot.com',
  messagingSenderId: '857737946613',
  appId: '1:857737946613:web:2b490053f1c0db3daaecbc'
}

// Get a Firestore instance
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
export const wordCollection = db.collection('english_word')
