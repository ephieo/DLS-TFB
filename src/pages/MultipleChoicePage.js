import React, { useEffect, useState } from 'react';
import {
  QuizContainer,
  ImgCont,
  QuestionCont,
  QuestionBtn,
  Img,
} from '../styled-components/Cards';

import { db } from './../database/firebase';

import DescriptionCard from './../components/descriptionCard';

export default function MultipleChoice() {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState(0);
  const [colour, setColour] = useState('transparent');
  const [toggle, setToggle] = useState(false);
  const [what, setWhat] = useState();

  const docRef = db
    .collection('Quizzes')
    .doc('key-stage-3')
    .collection('multiple-choice');

  const collectionArr = [];

  useEffect(() => {
    docRef
      .get()
      .then((result) => {
        return result.docs.forEach((doc) => {
          // console.log('doc', doc.data());
          collectionArr.push(doc.data());
        });
      })
      .then(() => {
        console.log('array', collectionArr);
        return setData(collectionArr);
      })
      .catch((error) => console.log(error));
  }, []);

  function correctAnswer(event) {
    const check = data[question].options.filter(
      (e) => e.text === event.target.textContent
    );
    console.log('check', check[0].answer);

    if (check[0].answer === false) {
      setToggle(true);
      setColour('red');
      setWhat(check[0]);
    } else {
      setToggle(true);
      setColour('green');
      setWhat(check[0]);
    }
  }

  return (
    <div className="mc">
      {data[question] ? (
        <>
          {!toggle ? (
            <QuizContainer>
              <ImgCont>
                <ImgCont width="100%" height="10%">
                  {data[question].question}
                </ImgCont>
                <Img src={data[question].image} alt="question img" />
              </ImgCont>
              <QuestionCont>
                {data[question].options.map((e) => (
                  <>
                    <QuestionBtn
                      onClick={correctAnswer}
                      background={colour}
                      key={data[question].options.text}
                    >
                      {e.text}
                    </QuestionBtn>
                    <br />
                  </>
                ))}
              </QuestionCont>
              {/* <QuestionBtn></QuestionBtn> */}
            </QuizContainer>
          ) : (
            <DescriptionCard
              background={colour}
              answerObj={what}
              question={question}
              setQuestion={setQuestion}
              toggle={toggle}
              setToggle={setToggle}
              setColour={setColour}
            />
          )}
        </>
      ) : (
        'null'
      )}
    </div>
  );
}

// useEffect(() => {
//   docRef
//     .get()
//     .then((doc) => {
//       if (doc.exists) {
//         console.log(doc.data());
//         setData(doc.data());
//       } else {
//         console.log('No such document!');
//       }
//     })
//     .catch((error) => {
//       console.log('Error getting document:', error);
//     });
// }, []);
