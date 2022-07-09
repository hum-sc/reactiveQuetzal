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

    function aleatorio(inferior, superior) {
        var numPosibilidades = superior - inferior;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        return inferior + aleatorio;
    }

    const updateWheelsValues = () => {
        setWheelFR(aleatorio(0, 120));
        setWheelBR(aleatorio(0, 120));
        setWheelFL(aleatorio(0, 120));
        setWheelBL(aleatorio(0, 120));
        setCockPit(aleatorio(0,50));
        setMotorL(aleatorio(0,120));
        setMotorR(aleatorio(0,120));
        setBattery(aleatorio(0,120));
        setBrakeBL(aleatorio(0,120));
        setBrakeBR(aleatorio(0,120));
        setBrakeFL(aleatorio(0,120));
        setBrakeFR(aleatorio(0,120));
        setPanel(aleatorio(0,120));
    }

    const updateCabValues = () => {
    } 
    useEffect(()=>{
        let wheels = setInterval(updateWheelsValues, 250)
        

        return ()=>{
            clearInterval(wheels);
            
        }
    });

    useEffect(()=>{
        let cab = setInterval(updateCabValues, 2000)
        return () => {
            clearInterval(cab);
        }
    })
    
    return [wheelFR, wheelFL, wheelBR, wheelBL, motorL, motorR, brakeFR, brakeFL, brakeBR, brakeBL, battery, cockPit, panel];
}