import React from 'react';

import {MainCont, Video, Button } from './../styled-components/reusables';
import k3multiple from './../video/k3multiple.mp4';


export default function VideoPage ({setVideo}){

    function handleClick (){
      setVideo(true);
    }
    return (

        <MainCont flexdir="column">
           <Video src={k3multiple} controls/>
           <MainCont>
            <p style={{ fontSize: '1.5rem' }}>Watch the video first!</p>
            <Button style={{ padding: '0.7rem 2rem', fontWeight: 'bold', boxShadow: '1px 3px 5px gray' }} onClick={handleClick}>Go To Quiz</Button>
           </MainCont>
        </MainCont>

    )
}
