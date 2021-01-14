import React, { useState, useEffect } from 'react';
import { db } from './../database/firebase';

export default function QuizPage() {
  const [data, setData] = useState(null);
  const docRef = db
    .collection('Quizzes')
    .doc('key-stage-3')
    .collection('question-1')
    .doc('q1');

  useEffect(() => {
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setData(doc.data());
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(function (error) {
        console.log('Error getting document:', error);
      });
  }, [docRef]);

  return (
    <div>
      {data ? (
        <>
          <h1>{data.question}</h1>
          <img src={data.image} alt="question img" />
          {Object.keys(data.options[0]).map((e) => (
            <>
              <button>{e}</button>
              <br />
            </>
          ))}
        </>
      ) : null}
    </div>
  );
}
