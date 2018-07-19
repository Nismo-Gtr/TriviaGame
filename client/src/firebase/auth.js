import {auth} from "./firebase" 

// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>{
    console.log("In create user");
    return  auth.createUserWithEmailAndPassword(email, password);
}

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () =>
  auth.signOut();