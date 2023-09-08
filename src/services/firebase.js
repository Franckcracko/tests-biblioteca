// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBf8sydnpxC0HIq2fUWq7H4i37f0wPafE4',
  authDomain: 'biblioteca-upal.firebaseapp.com',
  projectId: 'biblioteca-upal',
  storageBucket: 'biblioteca-upal.appspot.com',
  messagingSenderId: '1083599851275',
  appId: '1:1083599851275:web:d45f8ed698c1fae72d9c0e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
