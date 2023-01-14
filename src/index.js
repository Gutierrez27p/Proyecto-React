import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUKmjMIC7MobXupnEkVkKa4_GAw5Auq_w",
    authDomain: "carlylennys-proyectofinal.firebaseapp.com",
    projectId: "carlylennys-proyectofinal",
    storageBucket: "carlylennys-proyectofinal.appspot.com",
    messagingSenderId: "346256468678",
    appId: "1:346256468678:web:514d1f840d9494f9c7c5c7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
