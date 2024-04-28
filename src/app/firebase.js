// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkV9bbOJQr9Wv4TujWozEv9qmdlxkvdIM",
  authDomain: "waitlist-88584.firebaseapp.com",
  projectId: "waitlist-88584",
  storageBucket: "waitlist-88584.appspot.com",
  messagingSenderId: "652506213070",
  appId: "1:652506213070:web:b0c524e6670ef64cebbe9f",
  measurementId: "G-WW1DYC0X0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);