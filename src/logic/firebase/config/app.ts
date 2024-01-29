import { initializeApp, FirebaseApp } from 'firebase/app'

const app: FirebaseApp = initializeApp({
    apiKey: "AIzaSyAJszufscvlVU-UJP-zf6uMrkqRDkRB-sk",
    authDomain: "meu-dre.firebaseapp.com",
    projectId: "meu-dre",
    storageBucket: "meu-dre.appspot.com",
    messagingSenderId: "949304337387",
    appId: "1:949304337387:web:93715f5abc76693c1cefae",
    measurementId: "G-5CF39XS437"
  })

export { app }