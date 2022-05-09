import React from "react";
import { useState, useEffect, useCallback } from "react";


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

export function useTurnSignals(){
    const [state, setState] = useState(false)
    const [isRight, setRight] = useState(false);
    const [isLeft, setLeft] = useState(false);
    const [isBlinking, setBlinking] = useState(false);
    const [isBreaking, setBreaking] = useState(false);
    const [id, setId] = useState('');

    const handleRight = () => {

        setRight(!isRight);
        setLeft(false);
        setBlinking(false);
    }

    const handleLeft = () => {
        setLeft(!isLeft);
        setRight(false);
        setBlinking(false);
    }

    const handleBlinking = () => {
        setBlinking(!isBlinking);
        setLeft(false);
        setRight(false);
    }

    const startBreaking = () => {
        setBreaking(true);
    }

    const stopBreaking = () => {

    }

    const handleUserKeyDown = event => {
        const { key, keyCode } = event;
        switch (keyCode) {
            case 37:
                handleLeft();
                break;
            case 39:
                handleRight();
                break;
            case 16:
                handleBlinking();
                break;
            case 96:
                startBreaking();
                break;
            default:
                break;
        }
        
    }

    const handleUserKeyUp = event => {
        const key = event.key;
        if(key == "0"){
            setBreaking(false);
        } 
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyDown);
        window.addEventListener('keyup', handleUserKeyUp);
        
        if(isRight){
            setId('right')
        }else if (isLeft){
            setId('left');
        } else if (isBlinking) {
            setId('blinking');
        }else setId('');

        return ()=>{
            window.removeEventListener('keydown', handleUserKeyDown);
            window.removeEventListener('keyup', handleUserKeyUp)
        }
    });
    

    return [isRight, isLeft, isBlinking, isBreaking, id];
}