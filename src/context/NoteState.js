import NoteContext from "./noteContext";
import {
  getAuth,
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
  signOut,
  
} from "firebase/auth";
import { auth } from "../Firebase";
import { useState } from "react";


const NoteState = (props) => {

  //login user in DB
  function logIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       localStorage.setItem('token', user.accessToken)
       
     })
     .catch((error) => {
       alert(error.message)
       console.log(error.message) 
      })}




// create user in DB
      function signUp(email, password) {      
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('token', user.accessToken)
    // ...
  })
  .catch((error) => {
    console.log(error.message)
    alert(error.message)
  });}






    





  //sign with google

const provider = new GoogleAuthProvider();
const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('token', user.accessToken)
    
  }).catch((error) => {
    console.log(error.message)
    alert(error.message)
  });}


//for navbar hide
const [first, setfirst] = useState(false)
const setnav=(pta)=>{
  setfirst(pta)
}


//logout
  function logOut() {
    return signOut(auth);
  }
 
  

    
      
  return (
    <NoteContext.Provider value={{ first,setfirst,setnav ,logIn, signUp , logOut, signInWithGoogle}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;