import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDY2J35v7g8LNIdZpmDgW_APIFDfIUCQtU",
  authDomain: "travel-c890c.firebaseapp.com",
  projectId: "travel-c890c",
  storageBucket: "travel-c890c.appspot.com",
  messagingSenderId: "291294833271",
  appId: "1:291294833271:web:e8e778e97c37cb22883472",
  measurementId: "G-5VVNJYCQZQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig