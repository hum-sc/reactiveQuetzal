import React from "react";
import { useState, useEffect } from "react";


export function useTime(){
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const updateTime = () => {
        const date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        setSeconds(date.getSeconds());
    }

    useEffect(()=>{
        const interval = setInterval(updateTime, 1000);

        return(() => {
            clearInterval(interval);
        });
    })

    return [hours, minutes, seconds];
}

