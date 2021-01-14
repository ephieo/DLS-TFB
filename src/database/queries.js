import { db } from './firebase';
import "firebase/firestore";


export function signupDB(uid, email, userName) {
    return db.collection("users").doc(uid).set({ email: email, score: 0, userName: userName });
}
