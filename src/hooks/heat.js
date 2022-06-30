import React from 'react';
import {useEffect, useState} from 'react';
/**
 * Recupera los valores que registran los sensores de calor en tiempo real.
 * @returns {[int int int int]}[wheelFR, wheelFL, wheelBR, wheelBL, motorL, motorR, battery, cockPit]
 */
export function useHeatSensors(){
    /**
     * Nomenclatura:
     * [parte][F: front, B: back][L: left, R: right]
     */
    const [wheelFR, setWheelFR] = useState(1000);
    const [wheelFL, setWheelFL] = useState(10);
    const [wheelBR, setWheelBR] = useState(20);
    const [wheelBL, setWheelBL] = useState(700);
    
    const [battery, setBattery] = useState(50);
    const [cockPit, setCockPit] = useState(22);

    const [motorL, setMotorL] = useState(0);
    const [motorR, setMotorR] = useState(45);

    const [brakeFR, setBrakeFR] = useState(0);
    const [brakeFL, setBrakeFL] = useState(0);
    const [brakeBR, setBrakeBR] = useState(0);
    const [brakeBL, setBrakeBL] = useState(0);

    const [panel, setPanel] = useState(0);
    
    return [wheelFR, wheelFL, wheelBR, wheelBL, motorL, motorR, brakeFR, brakeFL, brakeBR, brakeBL, battery, cockPit, panel];
}