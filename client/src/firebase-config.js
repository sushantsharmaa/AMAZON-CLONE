import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBmKgjxVuuRyEXuOQ2l3JVWT1vyL-NBWM4",
    authDomain: "clone-f288a.firebaseapp.com",
    projectId: "clone-f288a",
    storageBucket: "clone-f288a.appspot.com",
    messagingSenderId: "212960916495",
    appId: "1:212960916495:web:180f0a49135ea88de71f7a",
    measurementId: "G-KEE2JXKG4G"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);