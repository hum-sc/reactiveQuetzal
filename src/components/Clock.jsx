import React from 'react';
import {useState, useEffect} from 'react';
import { useTime } from '../hooks/data';
import '../../public/styles/clock.css';

function Clock(props){
    const [hours, minutes] = useTime();

    return <div className='menu-item' id='clock'>
            <h2 className='clockNumber' id='h'>{hours<10 ? "0"+hours:hours}</h2>
            <h2 className='clockNumber' id='m'>{minutes<10 ? "0"+minutes:minutes}</h2>
        </div>

}

export default Clock