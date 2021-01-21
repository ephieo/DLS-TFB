import React from 'react';
import { Link } from 'react-router-dom';
import { StageBtn } from './../styled-components/reusables';

export default function QuizPage() {
  return (
    <div>
      <Link to="/k3/quiz-option">
        <StageBtn>KEY STAGE 3</StageBtn>
      </Link>
      <Link to="/k4/quiz-option">
        <StageBtn>KEY STAGE 4</StageBtn>
      </Link>
    </div>
  );
}

//quizPge
//k3:quiz-option
//k3:multiple choice
//k3:flash-card

//{multiple-choice} = useParams();
// {data ? (
//     <>
//       <h1>{data.question}</h1>
//       <img src={data.image} alt="question img" />
//       {Object.keys(data.options[0]).map((e) => (
//         <>
//           <button>{e}</button>
//           <br />
//         </>
//       ))}
//     </>
//   ) : null}
