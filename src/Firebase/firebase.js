import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAiULdic5AD1xHThdwloxCj-mt0-bbb-Sk",
    authDomain: "dental-clinic-ebb89.firebaseapp.com",
    databaseURL: "https://dental-clinic-ebb89.firebaseio.com",
    projectId: "dental-clinic-ebb89",
    storageBucket: "dental-clinic-ebb89.appspot.com",
    messagingSenderId: "416742350944",
    appId:"1:416742350944:web:6ed8ab1ef336a9364fe305",
    measurementId:"G-RYK2C99JFK"
};
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();
}

export default Firebase;

