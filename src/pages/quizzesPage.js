import React, {useState} from 'react';
import {db}from './../database/firebase';


export default function QuizPage (){

    const [data, setData] = useState(null);
    const docRef = db.collection("Quizzes").doc("key-stage-3").collection("question-1").doc("q1");

docRef.get().then(function(doc) {
    if (doc.exists) {
        setData(doc.data);
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    
    return (

        <div>
            {/* {data ? <h1>data[0]</h1> : null } */}   
        </div>

    )
}

  