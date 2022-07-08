import React from 'react';
import {useState, useEffect} from 'react';
import { useTime } from '../hooks/time';
import '../../public/styles/clock.css';

const secondary = 'var(--secondary)'

useTime

function Clock(){
    const [hours, minutes, seconds] = useTime();

    return <div className='menu-item' id='clock'>
            <h2 className='clockNumber' id='h'>{hours<10 ? "0"+hours:hours}</h2>
            <h2 className='clockNumber' id='m'>{minutes<10 ? "0"+minutes:minutes}</h2>
            <svg id='progressBar' height={70} width={70}>
                <circle id='clockBar' cy='35'cx='35' r='33' stroke={secondary} fill='none' strokeWidth={2} strokeDasharray={((seconds/60)*207)+' 207'}/>
                    
            </svg>
        </div>

}

export default Clock