import React from 'react';
import { useEffect } from 'react';
import MotorIcon from '../../../public/media/images/MotorIcon';
import '../../../public/styles/heatMap.css'
import { useHeatSensors } from '../../hooks/heat';
import Battery from './BatteryHeat';
import Cabina from './CabinaHeat';
import Data, { DataBack, DataSun } from './DataHeat';
import { Wheel, BackWheel } from './WheelHeat';

function HeatMap(props){

    const [wheelFR, wheelFL, wheelBR, wheelBL, motorL, motorR, brakeFR, brakeFL, brakeBR, brakeBL, battery, cockPit, panel] = useHeatSensors();

    const yellow = "var(--yellow)";
    const halfYellow = "var(--halfYellow)";
    const red = "var(--red)";
    const halfRed = 'var(--halfRed)';
    const green = "var(--green)";
    const halfGreen = "var(--halfGreen)";
    const blue= 'var(--blue)';
    const halfBlue = 'var(--halfBlue)';
    const colorTemperatura = (temperatura) => {
        if (temperatura <= 10) return [blue, halfBlue]
        if (temperatura <= 40) return [green, halfGreen];
        if (temperatura <= 70) return [yellow, halfYellow];
        return [red, halfRed];
    }
    const colorTempCab = (temperatura) => {
        if(temperatura <= 10) return blue
        if (temperatura <= 25) return green;
        if (temperatura <= 32) return yellow;
        return red;
    }

    return (
        <div className='heatMap' id={props.id}>
            <Data id='dataFR' wheelHeat={wheelFR} brakeHeat={brakeFR}/>
            <Data id='dataFL' wheelHeat={wheelFL} brakeHeat={brakeFL}/>
            <DataBack id='dataBR' wheelHeat={wheelBR} brakeHeat={brakeBR} motorHeat={motorR}/>
            <DataBack id='dataBL' wheelHeat={wheelBL} brakeHeat={brakeBL} motorHeat={motorL} />
            <DataSun id='dataSun' heat={panel}/>
            <p className='dataHeat-Text auxiliar' id='dataCab'>{cockPit}°C</p>
            <div className='quetzal' id='horizontal'>
                <Wheel id='fr' stroke={colorTemperatura(wheelFR)[0]} fill={colorTemperatura(wheelFR)[1]}/>
                <Wheel id='fl' stroke={colorTemperatura(wheelFL)[0]} fill={colorTemperatura(wheelFL)[1]}/>
                <BackWheel id='br' fillWheel={colorTemperatura(wheelBR)[1]} strokeWheel={colorTemperatura(wheelBR)[0]} fillMotor={colorTemperatura(motorR)[0]}/>
                <BackWheel id='bl' fillWheel={colorTemperatura(wheelBL)[1]} strokeWheel={colorTemperatura(wheelBL)[0]} fillMotor={colorTemperatura(motorL)[0]}/>
                <Cabina stroke={colorTempCab(cockPit)}/>
                <Battery heat={battery} stroke={colorTemperatura(battery)[0]} fill={colorTemperatura(battery)[1]}/>
            </div>
        </div>
    )
}

export default HeatMap;