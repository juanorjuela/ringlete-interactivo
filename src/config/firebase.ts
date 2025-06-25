// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN4ZcrKPbveHmJ91fQQ9IwaW9ctHuNycM",
  authDomain: "ringlete-interactivo.firebaseapp.com",
  projectId: "ringlete-interactivo",
  storageBucket: "ringlete-interactivo.firebasestorage.app",
  messagingSenderId: "301451289599",
  appId: "1:301451289599:web:6f03ffdd04eea315fafdca",
  measurementId: "G-0C4TL3GENT"
} as const;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally
let analytics: Analytics | null = null;

// Only initialize analytics if we're in a browser environment
if (typeof window !== 'undefined') {
  isSupported()
    .then(yes => {
      if (yes) {
        return getAnalytics(app);
      }
      console.log('Analytics not supported in this environment');
      return null;
    })
    .then(analyticsInstance => {
      analytics = analyticsInstance;
    })
    .catch(error => {
      console.warn('Analytics initialization failed:', error);
    });
}

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db }; 