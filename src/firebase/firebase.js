import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBAKMUk0M-qsY0SXO6d2DcaM9pLBF9YA8M",
    authDomain: "icare-haldia.firebaseapp.com",
    projectId: "icare-haldia",
    storageBucket: "icare-haldia.appspot.com",
    messagingSenderId: "660782965868",
    appId: "1:660782965868:web:6af71df3a30f122ac6e449"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
