import React from 'react'
import Webcam from 'react-webcam';
import { useState, useEffect } from 'react';
import '../../public/styles/mirror.css'
import { useTurnSignals } from '../hooks/data';

function Mirror(props){
    const [isRight, isLeft, isBlinking, isBreaking, id] = useTurnSignals();
    

    return(<div className='mirror-base'>
        <Webcam className= 'mirror'/>
        <div className={'mirror-lights '+ (isBreaking ? 'breaking' : '')}></div>
        <div className={'mirror-lights '+id}></div>
    </div>);
}

export default Mirror;