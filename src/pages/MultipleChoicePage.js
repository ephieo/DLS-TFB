import React, { useEffect, useState } from 'react';
import {
  QuizContainer,
  ImgCont,
  QuestionCont,
  QuestionBtn,
  Img,
} from './../components/Cards';

import { db } from './../database/firebase';

export default function MultipleChoice() {
  const [data, setData] = useState();

  const docRef = db
    .collection('Quizzes')
    .doc('key-stage-3')
    .collection('multiple-choice');
  // .doc('q1');

  // docRef
  //   .get()
  //   .then((doc) => {
  //     if (doc.exists) {
  //       console.log(doc.data());
  //       setData(doc.data());
  //     } else {
  //       console.log('No such document!');
  //     }
  //   })
  //   .catch((error) => {
  //     console.log('Error getting document:', error);
  //   });
  useEffect(() => {
    docRef
      .get()
      .then((query) => {
        query.forEach((doc) => {
          setData(doc.data());
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }, [docRef]);
  return (
    <div class="mc">
      {data ? (
        <>
          <QuizContainer>
            <ImgCont>
              <ImgCont width="100%" height="10%">
                {data.question}
              </ImgCont>
              <Img src={data.image} alt="question img" />
            </ImgCont>
            <QuestionCont>
              {Object.keys(data.options[0]).map((e) => (
                <>
                  <QuestionBtn>{e}</QuestionBtn>
                  <br />
                </>
              ))}
            </QuestionCont>
          </QuizContainer>
        </>
      ) : (
        'null'
      )}
    </div>
  );
}
