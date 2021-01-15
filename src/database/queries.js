import { db } from './firebase';

import 'firebase/firestore';

export function updateScore(uid) {
  const docRef = db.collection('users').doc(uid);
  
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {        
         return doc.data().score;        
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .then(score => {      
      return db.collection('users')
        .doc(uid)
        .update({ score: score + 100 });
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });

  // return db
  //   .collection('users')
  //   .doc(uid)
  //   .update({ score: (currentScore += 100) });
}

export function signupDB(uid, email, userName) {
  return db
    .collection('users')
    .doc(uid)
    .set({ email: email, score: 0, userName: userName });
}
