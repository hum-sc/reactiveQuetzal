import React from 'react'
import Webcam from 'react-webcam';
import { useState, useEffect, useContext} from 'react';
import '../../public/styles/mirror.css'
import { useTurnSignals } from '../hooks/lights';
import { Lights } from '../context/lightContext';

function Mirror(){
    const lights = useContext(Lights)

    return(<div className='mirror-base'>
        <Webcam className= 'mirror' mirrored={true}/>
        <div className={'mirror-lights '+ (lights.isBreaking ? 'breaking' : '')}></div>
        <div className={'mirror-lights '+lights.id}></div>
    </div>);
}

export default Mirror;