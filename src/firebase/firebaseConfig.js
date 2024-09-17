// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD896Tl0q8hn6ogyXLtqcxFIc6oXbSEz3I",
  authDomain: "hotel-app-b122b.firebaseapp.com",
  projectId: "hotel-app-b122b",
  storageBucket: "hotel-app-b122b.appspot.com",
  messagingSenderId: "209607396043",
  appId: "1:209607396043:web:a83fdfaf02b51822a3e94e",
  measurementId: "G-DCQHMR6Y1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
