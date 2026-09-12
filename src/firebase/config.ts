
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1itd_ovEcX7LXcgTi4agXK14mrjpREOQ",
  authDomain: "publikagencia.firebaseapp.com",
  projectId: "publikagencia",
  storageBucket: "publikagencia.firebasestorage.app",
  messagingSenderId: "269282382422",
  appId: "1:269282382422:web:be08890ae807de057c61f7",
  measurementId: "G-J1Q0N3ETJM",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

