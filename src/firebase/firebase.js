import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPCxdnlURoz1n8TDjQdXY1iprn82K4HLs",
    authDomain: "nha-trang-ntne.firebaseapp.com",
    projectId: "nha-trang-ntne",
    storageBucket: "nha-trang-ntne.appspot.com",
    messagingSenderId: "422044912492",
    appId: "1:422044912492:web:2e34eada0c4670e1c0c149",
    measurementId: "G-KQ4B9SLRN9"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)