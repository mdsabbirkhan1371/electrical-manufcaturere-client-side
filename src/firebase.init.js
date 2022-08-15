// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRprCAsMsewCwbIYm0v6bq53TvacqKIh4",
    authDomain: "electrical-manufacturing-site.firebaseapp.com",
    projectId: "electrical-manufacturing-site",
    storageBucket: "electrical-manufacturing-site.appspot.com",
    messagingSenderId: "1062387289821",
    appId: "1:1062387289821:web:d1ed11b3184efe081d9534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;