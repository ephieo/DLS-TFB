import { db } from './firebase';

import 'firebase/firestore';

export function updateScore(uid) {
  const docRef = db.collection('users').doc(uid);
  const currentScore = 0;
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        currentScore = doc.data().score;
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  return db
    .collection('users')
    .doc(uid)
    .updateData({ score: currentScore + 100 });

}

export function signupDB(uid, email, userName) {
    return db.collection("users").doc(uid).set({ email: email, score: 0, userName: userName });

}
