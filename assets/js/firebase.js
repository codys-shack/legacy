import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCiQ_vugOg6efPKMT4MZSykOi-dkGyIOm0",
  authDomain: "st-stardrive-auth-production.firebaseapp.com",
  projectId: "st-stardrive-auth-production",
  storageBucket: "st-stardrive-auth-production.appspot.com",
  messagingSenderId: "471549703762",
  appId: "1:471549703762:web:af8f902f1a3ff8eeb6518b",
  measurementId: "G-XDB76XTYT5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);