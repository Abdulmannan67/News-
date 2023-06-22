import { initializeApp } from "firebase/app";

import { getAuth ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH859rB-gJPHuBXklPlR3mKZjLdnEuQX0",
  authDomain: "newsproject-69aab.firebaseapp.com",
  projectId: "newsproject-69aab",
  storageBucket: "newsproject-69aab.appspot.com",
  messagingSenderId: "253978281260",
  appId: "1:253978281260:web:4d939317ce028f5d869889",
  measurementId: "G-98FP67V0HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


//sign with google

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result)=>{
     console.log(result)
     
  }).catch(error => console.log(error))
}
export default app;