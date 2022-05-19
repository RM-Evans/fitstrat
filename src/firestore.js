import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkHUFm4vXvRpwA04FBjHlMtGuXsQghjM8",
    authDomain: "fitstrat-ed8b3.firebaseapp.com",
    projectId: "fitstrat-ed8b3",
    storageBucket: "fitstrat-ed8b3.appspot.com",
    messagingSenderId: "169125590066",
    appId: "1:169125590066:web:a5081476a4934988c3f82b",
    measurementId: "G-WY5Q3QSR93"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);