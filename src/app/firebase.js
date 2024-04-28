// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCkV9bbOJQr9Wv4TujWozEv9qmdlxkvdIM",
  authDomain: "waitlist-88584.firebaseapp.com",
  projectId: "waitlist-88584",
  storageBucket: "waitlist-88584.appspot.com",
  messagingSenderId: "652506213070",
  appId: "1:652506213070:web:b0c524e6670ef64cebbe9f",
  measurementId: "G-WW1DYC0X0W",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const firestore = getFirestore(app);

export { app, analytics, firestore };
