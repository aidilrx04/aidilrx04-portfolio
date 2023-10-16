// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD0GhEcYxjHpv3J-hpM8HLjlJobEfG71lc',
	authDomain: 'aidil-rx04.firebaseapp.com',
	projectId: 'aidil-rx04',
	storageBucket: 'aidil-rx04.appspot.com',
	messagingSenderId: '1061838908227',
	appId: '1:1061838908227:web:297c8b00ac5bf6e005ddf6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
