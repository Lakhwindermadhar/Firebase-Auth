 //Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCTfQy4MsYm6m1jsYTPbQTSJxefOjPHVU8",
    authDomain: "wp-login-26980.firebaseapp.com",
    projectId: "wp-login-26980",
    storageBucket: "wp-login-26980.firebasestorage.app",
    messagingSenderId: "951373001594",
    appId: "1:951373001594:web:5ba5e8430431984a0e9cc3",
    measurementId: "G-X5EK8CSSR2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
const auth = getAuth(app);       
const db = getFirestore(app);    

// Sign up
const signupForm = document.querySelector('#signup-form');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
      });
      });

 ///log out
 const logout = document.querySelector('#logout');
 logout.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
        console.log('user signed out');
    });
 });

 //login
 const loginForm = document.querySelector('#login-form');
 loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  
  signInWithEmailAndPassword(auth, email, password).then(cred => {
    console.log(cred.user)
    //close the login modal and reset the form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset(); 
  })
 })