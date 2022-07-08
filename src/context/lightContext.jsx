import React from 'react'
import {createContext ,useState, useEffect} from 'react';
import { useTurnSignals } from '../hooks/lights';

export const Lights = createContext({});

function LightsProvider (props) {
    const [isRight, isLeft, isBlinking, isBreaking, id] = useTurnSignals();
    return (
        <Lights.Provider value={
            {
                isRight,
                isLeft,
                isBlinking,
                isBreaking,
                id
            }
        }>
            {props.children}
        </Lights.Provider>
    )
}

export default LightsProvider;