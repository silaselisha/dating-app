// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCkyXLjQyIIpdgVkW5ioFB2Oi99VJn1zlE",
    authDomain: "tinder-clone-7ffea.firebaseapp.com",
    projectId: "tinder-clone-7ffea",
    storageBucket: "tinder-clone-7ffea.appspot.com",
    messagingSenderId: "260385124023",
    appId: "1:260385124023:web:2bd722cd5bcb9635c62732",
    measurementId: "G-88T8HHP4CP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db