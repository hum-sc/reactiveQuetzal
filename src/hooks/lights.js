import React from "react";
import {useState, useEffect} from 'react';
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
//Esto lo debemos modificar, ya que uso el teclado para activarlo
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