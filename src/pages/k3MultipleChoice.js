import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

export default function MultipleChoice() {
  const history = useHistory();

  return (
    <div>
      <h1>
        {history.includes('multiple-choice') ? (
          <h1>"found it "</h1>
        ) : (
          <h1>"found nothing "</h1>
        )}
      </h1>
    </div>
  );
}
