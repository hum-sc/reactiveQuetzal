import React from 'react'
import {useState, useEffect} from 'react'
import '../../public/styles/clock.css'

function Clock(props){
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    useEffect(()=>{
        const updateTime = ()=>{
            const date = new Date();
            setMinutes(date.getMinutes().toPrecision());
            setHours(date.getHours());
        }
        const interval = setInterval(updateTime, 1000);

        return(()=>{
            clearInterval(interval);
        });
    })

    return <div className='menu-item' id='clock'>
            <h2 className='clockNumber' id='h'>{hours<10 ? "0"+hours:hours}</h2>
            <h2 className='clockNumber' id='m'>{minutes<10 ? "0"+minutes:minutes}</h2>
        </div>

}

export default Clock