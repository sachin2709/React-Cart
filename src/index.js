
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQA1GAGbUhlDHHW9aIbE-tV6YYK42C8Yk",
  authDomain: "cart-b11bb.firebaseapp.com",
  projectId: "cart-b11bb",
  storageBucket: "cart-b11bb.appspot.com",
  messagingSenderId: "1012741297574",
  appId: "1:1012741297574:web:0895012ce6ed7db8f82b67"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


