import * as firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCnkN-Zrub3h84CDdw774rd03DXbvyaqMc",
    authDomain: "indexapp-6d191.firebaseapp.com",
    databaseURL: "https://indexapp-6d191.firebaseio.com",
    projectId: "indexapp-6d191",
    storageBucket: "indexapp-6d191.appspot.com",
    messagingSenderId: "121394248384"
};
let firebaseApp = firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const fbProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
export const database = firebase.database();
export const storageKey = 'FIREBASE_KEY';

export const isAuthenticated = () => {
  return !!auth.currentUser || !!localStorage.getItem(storageKey);
}