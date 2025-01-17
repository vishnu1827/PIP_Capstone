import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlVeMMqLt6WL1Ja7TB2l_LPWOkWEqCf9g",
  authDomain: "krushibandhu-888ba.firebaseapp.com",
  databaseURL: "https://krushibandhu-888ba-default-rtdb.firebaseio.com",
  projectId: "krushibandhu-888ba",
  storageBucket: "krushibandhu-888ba.firebasestorage.app",
  messagingSenderId: "835633764940",
  appId: "1:835633764940:web:cd0794da3d2979f40172e9",
  measurementId: "G-6ZPJQM9G96"
};

// Check if a Firebase app is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export default app;
