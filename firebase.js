
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAgizv1-Be_O7Bj9092fVd_mjcfFeFrcM8",
  authDomain: "kingtrader-professional-trader.firebaseapp.com",
  projectId: "kingtrader-professional-trader",
  storageBucket: "kingtrader-professional-trader.firebasestorage.app",
  messagingSenderId: "146125380786",
  appId: "1:146125380786:web:58d46bc20ec3dea3dd3dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
