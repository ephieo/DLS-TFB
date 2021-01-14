import React from 'react';
import { Link } from 'react-router-dom';

export default function QuizPage() {
  return (
    <div>
      <Link to="/k3/quiz-option/multiple-choice">
        <div>KEY STAGE 3</div>
      </Link>
      <Link to="/k4/quiz-option/flash-card">
        <div>KEY STAGE 4</div>
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
