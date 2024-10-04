
import { initializeApp } from "firebase/app";


import { getAuth, GoogleAuthProvider } from "firebase/auth";``


const firebaseConfig = {
  apiKey: "AIzaSyDM2LeJnBXA3-hQ_wkCUIfUS56g323s3MI",
  authDomain: "swiggy-project-aman.firebaseapp.com",
  projectId: "swiggy-project-aman",
  storageBucket: "swiggy-project-aman.appspot.com",
  messagingSenderId: "267911656508",
  appId: "1:267911656508:web:041cc75f85504e6b8fbf39"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
    
const provider = new GoogleAuthProvider();

export { auth, provider };