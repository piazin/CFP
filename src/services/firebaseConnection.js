import firebase from "firebase";
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAsD7NMU6yND1yresuO_xw1cGgn5WMhWf4",
    authDomain: "financeinnov-cfp.firebaseapp.com",
    projectId: "financeinnov-cfp",
    storageBucket: "financeinnov-cfp.appspot.com",
    messagingSenderId: "608202529844",
    appId: "1:608202529844:web:a3619498796fd5fe023e61"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;