// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCc2_1nAiwA5JHFGFltXwbrcX7gx3If8U8",
    authDomain: "tech-parts.firebaseapp.com",
    projectId: "tech-parts",
    storageBucket: "tech-parts.appspot.com",
    messagingSenderId: "105939406987",
    appId: "1:105939406987:web:83c0528c25344f445cc48e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;