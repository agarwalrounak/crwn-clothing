import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGCVjIv5mVMp9c-pqgRCK0a51WztrQRSU",
    authDomain: "crwn-db-5.firebaseapp.com",
    databaseURL: "https://crwn-db-5.firebaseio.com",
    projectId: "crwn-db-5",
    storageBucket: "crwn-db-5.appspot.com",
    messagingSenderId: "434062697851",
    appId: "1:434062697851:web:28bcacade8047eac6b89de",
    measurementId: "G-E3BPMYJK50"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

