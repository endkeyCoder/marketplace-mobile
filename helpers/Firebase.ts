// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdU2OEwzTY_7DhSnUVeW8nn1Cpra1BGv8",
  authDomain: "marketplace-mobile-3d83f.firebaseapp.com",
  projectId: "marketplace-mobile-3d83f",
  storageBucket: "marketplace-mobile-3d83f.appspot.com",
  messagingSenderId: "211399479976",
  appId: "1:211399479976:web:4ebd0081f22c36f6bce89d",
  measurementId: "G-PR88PZW021"
};

// Initialize Firebase

export abstract class Firebase {
    static init() {
        const app = initializeApp(firebaseConfig)
        return app
    }
    static getAnalytics(app?: FirebaseApp){
        const analytics = getAnalytics(app);
        return analytics
    }
}