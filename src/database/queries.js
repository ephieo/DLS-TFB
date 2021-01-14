import { db } from './firebase';
import "firebase/firestore";


export function signupDB(uid, email) {
    return db.collection("users").doc(uid).set({ email: email, score: 0 });
}
