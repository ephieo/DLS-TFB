import React, { useEffect, useState } from 'react';

import { db } from './../database/firebase';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './../contexts/AuthContext';
import { updateScore } from './../database/queries';

import MultipleChoiceCard from './../components/multipleChoice';
import DescriptionCard from './../components/descriptionCard';
import ResultCard from './../components/resultCard';

import {dataCall} from './../utils/dataHelpers';

import winner from './../images/winner2.svg';
import noPoint from './../images/learning.svg';

import VideoPage from './videosPage';

import { AccountBtn } from './../styled-components/Cards'

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
  const [video,setVideo] = useState(false);
  const [pointAdded,setPointAdded] = useState(false);

  
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

  if(stage){return dataCall(docRef,collectionArr,setData)}
    
    return () => clearTimeout(timer);
  // eslint-disable-next-line
  }, []);    


  return (
    <div className="mc">
      {video ? 
      <>
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

          { !pointAdded ? (
          
          <AccountBtn
            onClick={() => {
              updateScore(currentUser.uid);
              setPointAdded(true)
            }}
            background={'#08302e'}
          >
            Click Here to Save points !
          </AccountBtn>        

          ) : (<Link to="/account"><AccountBtn>Go to Account</AccountBtn></Link>)}

          </ResultCard>
        ) : !win && timer ?(          
          <ResultCard imgSrc={noPoint} text={'Better luck next time!! '} ><Link to="/account"><AccountBtn>Account</AccountBtn></Link></ResultCard> 
        ):null
      ) : (
       'null'
      )} </> : <VideoPage setVideo={setVideo} />}
    </div> 
  );
}

