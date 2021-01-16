import React, { useEffect, useState } from 'react';
import {
  // QuizContainer,
  // ImgCont,
  // QuestionCont,
  QuestionBtn
  // Img,
} from '../styled-components/Cards';

import { db } from './../database/firebase';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';
import { updateScore } from './../database/queries';

import MultipleChoiceCard from './../components/multipleChoice';
import DescriptionCard from './../components/descriptionCard';
import ResultCard from './../components/resultCard';

import loser from './../images/loser.png';
import winner from './../images/winner.png';

export default function MultipleChoice() {

  const { currentUser } = useAuth();

  const [data, setData] = useState([]);
  const [question, setQuestion] = useState(0);
  const [colour, setColour] = useState('transparent');
  const [toggle, setToggle] = useState(false);
  const [answer, setAnswer] = useState();
  const [win, setWin] = useState(true);
  const [stage, setStage] = useState('key-stage-3');
  const [timer,setTimer] = useState(false);

  
const location = useLocation();

if(stage && location.pathname.includes('k4') ){
  setStage('key-stage-4')
}

let docRef;

if(stage){
  docRef = db
    .collection('Quizzes')
    .doc(stage)
    .collection('multiple-choice');
}
   

  const collectionArr = [];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(true);
    }, 3000);

    if(stage) {
      docRef
      .get()
      .then((result) => {
        return result.docs.forEach((doc) => {
          collectionArr.push(doc.data());
        });
      })
      .then(() => {
        console.log('array', collectionArr);
        return setData(collectionArr);
      })
      .catch((error) => console.log(error));}
      return () => clearTimeout(timer);
    }, []);
    


  return (
    <div className="mc">
      {data[question] ? (
        <>
          {!toggle ? (
           <MultipleChoiceCard
           colour={colour}
           data={data}
           question={question}
           setToggle={setToggle}
           setColour={setColour}
           setAnswer={setAnswer}
           setWin={setWin}
           />
          ) : (
            <DescriptionCard
              background={colour}
              answerObj={answer}
              question={question}
              setQuestion={setQuestion}
              toggle={toggle}
              setToggle={setToggle}
              setColour={setColour}
            />
          )}
        </>
      ) : question > collectionArr.length - 1 ? (
        win && timer ?  (
          <ResultCard imgSrc={winner} text={'Congrats!! '}>

          <Link to="/account">
          <QuestionBtn
            onClick={() => {
              updateScore(currentUser.uid);
            }}
            background={'#08302e'}
          >
            Click Here to Save progress !
          </QuestionBtn>
        </Link>
          </ResultCard>
        ) : !win && timer ?(          
          <ResultCard imgSrc={loser} text={'Better luck next time!! '} ><Link to="/account">Account</Link></ResultCard> 
        ):null
      ) : (
        'null'
      )}
    </div>
  );
}

