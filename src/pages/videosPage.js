import React from 'react';

import {MainCont, Video, Button} from './../styled-components/reusables';
import k3multiple from './../video/k3multiple.mp4';


export default function VideoPage ({setVideo}){

    function handleClick (){
      setVideo(true);
    }
    return (

        <MainCont flexdir="column">
           <Video src={k3multiple} controls/>
           <Button onClick={handleClick}>Go To Quiz</Button>
        </MainCont>

    )
}
